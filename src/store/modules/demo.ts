import { defineStore } from 'pinia'

interface demoState {
    name: string,
    age: number
}
export const useDemoStore = defineStore({
    id: 'demo',
    state: ():demoState => ({
        name: 'YY',
        age: 18
    }),
    getters: {
        getAge(): number {
            return this.age + 1
        }
    },
    actions: {
        changName(val: string) {
            this.name = val
        }
    }
})
