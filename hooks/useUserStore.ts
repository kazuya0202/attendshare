import type { User } from "@supabase/supabase-js"
import { create } from "zustand"

type UserStore = {
  user: User | null
  updateUser: (user: User | null) => void
}

const useUserStore = create<UserStore>()((set) => ({
  user: null,
  updateUser: (user: User | null) => set({ user }),
}))

export { useUserStore }
