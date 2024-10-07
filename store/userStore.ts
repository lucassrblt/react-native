import {create} from "zustand";

type State = {
    user: {
        userData: [];
        spotifyToken: string;
    };
}

type Actions = {
  updateToken : (token: string) => void;
}


export const useUserStore = create<State & Actions>((set) => ({
  user: {
    userData: [],
    spotifyToken: "",
  },
  updateToken: (token: string) => set((state: State) => ({user: {...state.user, spotifyToken: token}})),
}));