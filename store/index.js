
export const state = () => ({
    projects: [
        {
            id: 0,
            hasFreelancer: false,
            title: 'Création de logo',
            description: "J'ai besoin de créer un logo pour mon entreprise",
            skills: ['design', 'minimalisme'],
            advancement: 2,
            picture:
                'https://i.redd.it/tzleim0il7q41.jpg',
        },
        {
            id: 1,
            hasFreelancer: false,
            title: 'Concert SoundBreaker',
            description: 'Il me faudrait un batteur pour mon groupe',
            skills: ['musicien', 'dynamique'],
            advancement: 2,
            picture:
                'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbmNlcnR8ZW58MHx8MHx8&w=1000&q=80',
        },
        {
            id: 2,
            hasFreelancer: false,
            title: 'Minion Challenge',
            description: 'Il me faudrait un développeur pour créer mon jeu',
            skills: ['unity', 'C#'],
            advancement: 2,
            picture:
                'https://wallpaperaccess.com/full/7446.jpg',
        },
    ],
    details: {},
    user: { name: 'Florent Berthier', money: 0.1 },
})

export const mutations = {
    setDetails(state, id) {
        state.details = state.projects[id]
    },
    modify(state, { id, payload }) {
        state.details = state.projects[id] = { ...state.details, ...payload }
    },
    takeUserMoney(state, { moneyToTake }) {
        state.user.money = state.user.money - moneyToTake
    },
    setUser(state, user) {
        state.user = user
    }
}
