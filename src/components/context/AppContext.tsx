import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { useClickAway, useToggle } from "react-use";
import update from "immutability-helper";

const initColumns = [
  {
    id: 0,
    title: "New",
    icon: "🆕",
    type: "new",
    cards: [
      {
        id: 0,
        text: "New",
        icon: "🏰",
        decription: " Hight",
      },
    ],
  },
];

export const AppContext = createContext({});

export const AppProvider = ({ children }: any) => {
  const [on, toggle] = useToggle(false);
  const [isOpenSearch, setIsOpenSearch] = useToggle(false);
  const [isOpenColumn, setIsOpenColumn] = useToggle(false);
  const [isOpen, setIsopen] = useToggle(false);
  const [columns, setColumns] = useState(initColumns);

  useEffect(() => {
    if (localStorage.getItem("Data")) {
      setColumns(JSON.parse(localStorage.getItem("Data") || "[]"));
    }
  }, []);

  useEffect(() => {
    if (on) {
      localStorage.setItem("Data", JSON.stringify(columns));
    } else {
      toggle();
    }
  }, [columns, on, toggle]);

  const ref = useRef(null);
  useClickAway(ref, () => {
    setIsopen(false);
  });

  const addColumn = (newColumn: any) => {
    setColumns((prevState) => {
      return [
        ...prevState,
        {
          id: prevState.length,
          title: newColumn,
          icon: "🆕",
          type: newColumn,
          cards: [],
        },
      ];
    });
  };

  const addCard = (columnType: string, text: any) => {
    setColumns((prevState) => {
      const indexColumn = prevState.findIndex(
        (item) => item.type === columnType
      );
      const column = prevState[indexColumn];
      const newCard = {
        id: column.cards.length,
        text,
        icon: "",
        decription: "",
      };
      column.cards = [...column.cards, newCard];
      prevState[indexColumn] = column;

      return [...prevState];
    });
  };

  const findColumn = useCallback(
    (id: number) => {
      const index = columns.findIndex((item) => item.id === id);
      return {
        column: columns[index],
        index,
      };
    },
    [columns]
  );

  const moveColumn = useCallback(
    (id: number, atIndex: number) => {
      const { column, index } = findColumn(id);
      setColumns(
        update(columns, {
          $splice: [
            [index, 1],
            [atIndex, 0, column],
          ],
        })
      );
    },
    [columns, findColumn]
  );

  const handleRemoveColumn = (id: number) => {
    setColumns(() => {
      const newColumn = [...columns];
      const index = newColumn.findIndex((item) => item.id === id);
      newColumn.splice(index, 1);
      return [...newColumn];
    });
  };

  const handleEditColumn = (id: number, newText: string) => {
    setColumns((columns) => {
      const index = columns.findIndex((item) => item.id === id);
      columns[index].title = newText;
      return columns;
    });
  };

  const handleRemoveCard = (columnType: string, idCard: number) => {
    setColumns((prevState) => {
      const indexColumn = prevState.findIndex(
        (item) => item.type === columnType
      );
      const column = prevState[indexColumn];
      column.cards = column.cards.filter((card: any) => card.id !== idCard);
      prevState[indexColumn] = column;
      return [...prevState];
    });
  };

  const value = {
    ref,
    columns,
    isOpen,
    isOpenColumn,
    isOpenSearch,
    setIsOpenSearch,
    setIsopen,
    addColumn,
    addCard,
    moveColumn,
    findColumn,
    setIsOpenColumn,
    handleRemoveColumn,
    handleRemoveCard,
    handleEditColumn,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
