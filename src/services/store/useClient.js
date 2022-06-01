import create from 'zustand'

export const useClientStore = create(set => ({
  navigationContainer: 'client',
  setNavigationContainer: navigationContainer => set({ navigationContainer  }),
}))

