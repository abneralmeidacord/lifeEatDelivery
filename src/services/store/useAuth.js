import create from 'zustand'

export const useAuthStore = create(set => ({
  navigationContainer: 'auth',
  setNavigationContainer: navigationContainer => set({ navigationContainer  }),

  user: {},
  setUser: props =>
    set(state => ({
      user: {
        ...state.user,
        ...props,
      }
    })),
}))

