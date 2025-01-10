import {create} from "zustand/index";

interface modalOpen {
    status: { consent: boolean }
    setConsentOpen: () => void;
    setConsentClose: () => void;

}

export const useModalOpen = create<modalOpen>((set) => ({
    status: {consent: true},

    // Update search to open
    setConsentOpen: () => set((state) => ({
        status: {...state.status, consent: true}
    })),

    // Update search to close
    setConsentClose: () => set((state) => ({
        status: {...state.status, consent: false}
    })),

}));