import create from 'zustand'

export const useADMStore = create(set => ({
  navigationContainer: 'adm',
  setNavigationContainer: navigationContainer => set({ navigationContainer  }),
}))

