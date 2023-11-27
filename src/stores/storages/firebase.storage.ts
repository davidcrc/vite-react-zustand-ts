import { StateStorage, createJSONStorage } from "zustand/middleware";

const firebaseUrl = "https://zustand-storage-proyect.firebaseio.com/zustand";

const storageApi: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    const data = await fetch(`${firebaseUrl}/${name}.json`).then((res) =>
      res.json()
    );

    return JSON.stringify(data);
  },

  setItem: async function (name: string, value: string): Promise<void> {
    await fetch(`${firebaseUrl}/${name}.json`, {
      method: "PUT",
      body: value,
    }).then((res) => res.json());

    // console.count('setItem');

    return;
  },

  removeItem: function (name: string): void | Promise<void> {
    console.log("removeItem", name);
  },
};

export const firebaseStorage = createJSONStorage(() => storageApi);
