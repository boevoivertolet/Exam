/*//1____________________________________________________________________________________________________________________
/!*
Вопрос:

    Какой тип должен быть вместо XXX?
*!/
/!*type Status = 'Stopped' | 'Playing' | 'Paused'

type StateType = {

    volume: number // in percents

    trackUrl: string // 'https://blabla.com/track01.mp3',

    currentPlayPosition: number // milliseconds,

    status: Status

}


export const playerReducer = (state: StateType, action: any) => {

    switch (action.type) {

        case 'TRACK-URL-CHANGED':

            return {

                ...state,

                trackUrl: action.url

            }

        default:

            return state

    }

}


const muteTrackAC = () => ({type: 'TRACK-MUTED'})

const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})

const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})


//Какой тип должен быть вместо XXX?*!/ //'TRACK-URL-CHANGED'
//2____________________________________________________________________________________________________________________
/!*
Вопрос:

    Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true
*!/
/!*type Status = 'Stopped' | 'Playing' | 'Paused'

type StateType = {

    volume: number // in percents

    trackUrl: string // 'https://blabla.com/track01.mp3',

    currentPlayPosition: number // milliseconds,

    status: Status

}

export const playerReducer = (state: StateType, action: any) => {

    switch (action.type) {

        case 'TRACK-STATUS-CHANGED':

            return {

                ...state,

                status: action.status

            }

        default:

            return state

    }

}


const muteTrackAC = () => ({type: 'TRACK-MUTED'})

const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})

const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})


const state: StateType = {

    status: 'Stopped',

    currentPlayPosition: 1213,

    trackUrl: 'https://blabla.com/track01.mp3',

    volume: 100

}


const newState = playerReducer(state,changeTrackPlayStatusAC('Paused'))

console.log(newState.status === 'Paused')


//Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true*!/
//3____________________________________________________________________________________________________________________
/!*
Вопрос:

    Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true
*!/
/!*type Status = 'Stopped' | 'Playing' | 'Paused'

type StateType = {

    volume: number // in percents

    trackUrl: string // 'https://blabla.com/track01.mp3',

    currentPlayPosition: number // milliseconds,

    status: Status

}

export const playerReducer = (state: StateType, action: any) => {

    switch (action.type) {

        case 'TRACK-VOLUME-CHANGED':

            return {

                ...state,

                volume: action.volumeLevel

            }

        default:

            return state

    }

}


const muteTrackAC = () => ({type: 'TRACK-MUTED'})

const changeVolumeAC = (volumeLevel: number) => ({type: 'TRACK-VOLUME-CHANGED', volumeLevel})

const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})

const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})


const state: StateType = {

    status: 'Stopped',

    currentPlayPosition: 1213,

    trackUrl: 'https://blabla.com/track01.mp3',

    volume: 100

}

const newState = playerReducer(state, changeVolumeAC(20))

console.log(newState.volume === 20)


// Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.*!/ //volume: action.volumeLevel
//4____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что нужно написать вместо XXX, чтобы в консоли увидеть true?
*!/
/!*export const reducer = (state: any, action: any) => {

    switch (action.type) {

        case 'TRACK-LIKED':

            return {

                ...state,

                [XXX]: {

                    ...state[XXX],

                    likesCount: state[XXX].likesCount + 1

                }

            }

        default:

            return state

    }

}


const likeTrackAC = (trackId: number) => ({type: 'TRACK-LIKED', trackId})



const state = {

    12: {id: 12, likesCount: 10},

    14: {id: 14, likesCount: 2},

    100: {id: 100, likesCount: 0},

}

const newState = reducer(state, likeTrackAC(14))


console.log(newState[14].likesCount === 3)


// Что нужно написать вместо XXX, чтобы в консоли увидеть true?*!/
//5____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что нужно написать вместо XXX, чтобы трек корректно добавился и в консоли увидеть true?
*!/
/!*export const reducer = (state: any, action: any) => {

    switch (action.type) {

        case 'TRACK-ADDED':

            return XXX

        default:

            return state

    }

}


const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})



const state = [

    {id: 12, likesCount: 10},

    {id: 14, likesCount: 2},

    {id: 100, likesCount: 0}

]

const newState = reducer(state, addTrackAC(300))


console.log(newState[3].likesCount === 0)


// Что нужно написать вместо XXX, чтобы трек корректно добавился и в консоли увидеть true?*!/
//6____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?
*!/
/!*export const reducer = (state: any, action: any) => {

    switch (action.type) {

        case 'TRACK-DELETED':

            return state.filter((track: any) => action.type)

        default:

            return state

    }

}


const deleteTrackAC = (trackId: number) => ({type: 'TRACK-DELETED', trackId})



const state = [

    {id: 12, likesCount: 10},

    {id: 14, likesCount: 2},

    {id: 100, likesCount: 0}

]

const newState = reducer(state, deleteTrackAC(14))


console.log(newState.length === 2)



// Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?*!/
//7____________________________________________________________________________________________________________________
/!*
Вопрос:

    Какие типы должны быть вместо XXX, YYY и ZZZ?

    Ответ дать через пробел, например: 'BLABLA' 'HEYНЕY' 'HIPHOP'
*!/
/!*
type StateType = {

    volume: number // in percents

    trackUrl: string // 'https://blabla.com/track01.mp3',

    currentPlayPosition: number // milliseconds,

}


export const reducer = (state: StateType, action: any) => {

    switch (action.type) {

        case 'TRACK-URL-CHANGED':

            return {

                ...state,

                trackUrl: action.url

            }

        case 'TRACK-MUTED':

            return {

                ...state,

                volume: 0

            }

        case 'TRACK-REWOUND-TO-START':

            return {

                ...state,

                currentPlayPosition: 0

            }

        default:

            return state

    }

}


const muteTrackAC = () => ({type: 'TRACK-MUTED'})

const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})

// перемотатьНаНачало:

const rewindToStart = () => ({type: 'TRACK-REWOUND-TO-START'})


// Какие типы должны быть вместо XXX, YYY и ZZZ?

// Ответ дать через пробел, например:   'BLABLA' 'HEYНЕY' 'HIPHOP'*!/ // 'TRACK-URL-CHANGED' 'TRACK-MUTED' 'TRACK-REWOUND-TO-START'*/ // 1 неделя
/*
// import {combineReducers, createStore} from 'redux'
//
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
//
// const usersReducer = (state = initialState, action: any) => {
//
//     return state
//
// }
//
//
// const store = createStore(combineReducers({
//
//     users: usersReducer
//
// }))
//
//
// store.XXX(() => {
//
//     console.log('state changed')
//
// })
//
//
// store.dispatch({type: 'ANY'})
//
//
// // Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?
//
// import {combineReducers, createStore} from 'redux'
//
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
//
// const usersReducer = (state = initialState, action: any) => {
//
//     return state
//
// }
//
//
// const store = createStore(combineReducers({
//
//     users: usersReducer
//
// }))
//
//
// store.subscribe(() => {
//
//     const state = XXX
//
//     console.log(state)
//
// })
//
//
// store.dispatch({type: 'ANY'})
//
//
// //Что нужно написать вместо XXX, чтобы получить актуальный стейт?
//
// import {combineReducers, createStore} from 'redux'
//
// import ReactDOM from 'react-dom'
//
// import {Provider, useSelector} from 'react-redux'
//
// import React from 'react'
//
//
// let initialState = {items:
//
//         [
//
//             {store = createStore(combineReducers({
//                         id: 1, name: 'Dimych'},
//
//                     {id: 2, name: 'Ignat'}
//
//         ]
//
// }
//
// const usersReducer = (state = initialState, action: any) => {
//
//     return state
//
// }
//
//
// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
//
// const authReducer = (state = authInitialState, action: any) => {
//
//     return state
//
// }
//
//
// let rootReducer = combineReducers({
//
//     users: usersReducer,
//
//     auth: authReducer
//
// })
//
//
// const store = createStore(rootReducer)
//
// type RootStateType = ReturnType<typeof rootReducer>
//
//
// const selector = (state: RootStateType) => state.users.items
//
//
// const Users = () => {
//
//
//     const users = XXX
//
//
//     return <ul>
//
//         {users.map(u => <li key={u.id}>{u.name}</li>)}
//
//     </ul>
//
// }
//
//
// ReactDOM.render(<div>
//
//         <Provider store={store}>
//
//             <Users/>
//
//         </Provider>
//
//     </div>,
//
//     document.getElementById('root')
//
// )
//
//
// // Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
//
// // ❗ Ответ дать минимально возможным объёмом кода
//
// import React, {useState, useReducer, useEffect} from 'react';
//
// import ReactDOM from 'react-dom';
//
// import './index.css';
//
//
// const changeCounter = (state: number, action: any): number => {
//
//     switch (action.type) {
//
//         case "INC_VALUE":
//
//             return state + 1
//
//         case "RESET":
//
//             return 0
//
//         case "DEC_VALUE":
//
//             return state - 1
//
//         default:
//
//             return state
//
//     }
//
// }
//
//
// function Counter() {
//
//     const [value, setValue] = useReducer(changeCounter, 0)
//
//     const [isCounter, setIsCounter] = useState(true)
//
//     const commonStyles: React.CSSProperties = {
//
//         border: "1px solid black",
//
//         margin: "100px auto",
//
//         width: "300px",
//
//         height: "150px",
//
//         textAlign: "center",
//
//     }
//
//     const btnStyles: React.CSSProperties = {
//
//         color: "white",
//
//         fontWeight: "bold",
//
//         backgroundColor: "darkgray",
//
//         borderRadius: "3px",
//
//         minWidth: "40px"
//
//     }
//
//
//     return (
//
//         <div style={commonStyles}>{
//
//             isCounter
//
//                 ? <div >
//
//                     <div style={{marginBottom: "20px"}}>
//
//                         <h2>{value}</h2>
//
//                         <button
//
//                             style={{...btnStyles, backgroundColor: "red"}}
//
//                             onClick={() => setIsCounter(false)}>OFF</button>
//
//                     </div>
//
//                     <button style={btnStyles} onClick={() => setValue({type: "INC_VALUE"})}>+</button>
//
//                     <button style={btnStyles} onClick={() => setValue({type: "RESET"})}>0</button>
//
//                     <button style={btnStyles} onClick={() => setValue({type: "DEC_VALUE"})}>-</button>
//
//
//                 </div>
//
//                 : <div style={{textAlign: "center"}}>
//
//                     <h2>Counter not working</h2>
//
//                     <button
//
//                         style={{...btnStyles, backgroundColor: "green"}}
//
//                         onClick={() => setIsCounter(true)}>ON</button>
//
//                 </div>
//
//         }
//
//         </div>
//
//     )
//
// }
//
//
//
// ReactDOM.render(
//
//     <Counter/>, document.getElementById('root')
//
// );
//
// // Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.
//
//
// import React from 'react'
//
// import { createStore } from 'redux'
//
// import { Provider, useSelector, useDispatch } from 'react-redux'
//
// import ReactDOM from 'react-dom'
//
//
// type StudentType = {
//
//     id: number
//
//     name: string
//
//     age: number
//
// }
//
//
// const initState = {
//
//     students:
//
//         [
//
//             {id: 1, name: 'Bob', age: 23},
//
//             {id: 2, name: 'Alex', age: 22}
//
//         ] as Array<StudentType>
//
// }
//
// type AddStudentAT = {
//
//     type: 'ADD-STUDENT'
//
//     name: string
//
//     age: number
//
//     id: number
//
// }
//
//
// type InitialStateType = typeof initState
//
//
// const studentsReducer = (state: InitialStateType = initState, action: AddStudentAT): InitialStateType => {
//
//     switch (action.type) {
//
//         case 'ADD-STUDENT':
//
//             return {
//
//                 ...state,
//
//                 students: [...state.students, {
//
//                     name: action.name,
//
//                     age: action.age,
//
//                     id: action.id
//
//                 }]
//
//             }
//
//     }
//
//     return state
//
// }
//
//
// const appStore = createStore(studentsReducer)
//
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
//
// const StudentList = () => {
//
//     const students = useSelector((state: RootStateType) => state.students)
//
//     return (
//
//         <ul>
//
//             {students.map(s => <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>)}
//
//         </ul>
//
//     )
//
// }
//
// const App = () => {
//
//     return <StudentList/>
//
// }
//
//
// ReactDOM.render(<div>
//
//         {/!*<XXX YYY={ZZZ}>*!/}
//
//         {/!*    <App/>*!/}
//
//         {/!*</XXX>*!/}
//         <Provider store={appStore}>
//
//             <App/>
//
//         </Provider>
//
//     </div>,
//
//     document.getElementById('root')
//
// )
//
//
// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?
//
// import {createStore} from 'redux'
//
// import ReactDOM from 'react-dom'
//
// import {Provider, useSelector, useDispatch} from 'react-redux'
//
// import React from 'react'
//
//
// const students = {
//
//     students: [
//
//         {id: 1, name: 'Bob'},
//
//         {id: 2, name: 'Alex'},
//
//         {id: 3, name: 'Donald'},
//
//         {id: 4, name: 'Ann'},
//
//     ]
//
// }
//
// type RemoveStudentAT = {
//
//     type: "REMOVE-STUDENT"
//
//     id: number
//
// }
//
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//
//     type: "REMOVE-STUDENT",
//
//     id
//
// })
//
//
// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//
//     switch (action.type) {
//
//         case "REMOVE-STUDENT":
//
//             return {
//
//                 ...state,
//
//                 students: state.students.filter(s => s.id !== action.id)
//
//             }
//
//     }
//
//     return state
//
// }
//
//
// const store = createStore(studentsReducer)
//
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
//
// const StudentList = () => {
//
//     const listItemStyles = {
//
//         width: "100px",
//
//         borderBottom: "1px solid gray",
//
//         cursor: "pointer",
//
//     }
//
//     const students = useSelector((state: RootStateType) => state.students)
//
//     const dispatch = useDispatch()
//
//     const studentsList = students.map(s => {
//
//         // const removeStudent = () => {
//         //
//         //     XXX(YYY( ZZZ))
//         //
//         // }
//         const removeStudent = () => {
//
//             dispatch(RemoveStudentAC(s.id))
//
//         }
//
//         return (
//
//             <li key={s.id}
//
//                 style={listItemStyles}
//
//                 onClick={removeStudent}>
//
//                 {s.name}
//
//             </li>)
//
//     })
//
//     return (
//
//         <ol>
//
//             {studentsList}
//
//         </ol>
//
//
//     )
//
// }
//
//
//
// ReactDOM.render(<div>
//
//         <Provider store={store}>
//
//             <StudentList/>
//
//         </Provider>
//
//     </div>,
//
//     document.getElementById('root')
//
// )
//
//
// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
//
// // удалялся из списка? Напишите через пробел.
*/ // 2 неделя
/*
// import React, {useCallback, useState} from 'react'
//
// import ReactDOM from 'react-dom'
//
//
// export const TempManager = () => {
//
//     const [temp, setTemp] = useState(0)
//
//     const [seconds, setSeconds] = useState(0)
//
//
//     const resetTemp = useCallback(() => setTemp(0),[temp])
//
//     const increaseSeconds = () => setSeconds(seconds + 100)
//
//
//     return (
//
//         <>
//
//             <TempDisplay temp={temp} reset={resetTemp}/>
//
//             <div>
//
//                 <p><b>Секунды:</b> {seconds} с</p>
//
//                 <button onClick={increaseSeconds}>
//
//                     Увеличить время на 100 секунд
//
//                 </button>
//
//             </div>
//
//         </>
//
//     )
//
// }
//
//
// const TempDisplay = React.memo((props: any) => {
//
//     console.log('Render TempDisplay')
//
//     return (
//
//         <div>
//
//             <p><b>Температура</b>: {props.temp} &#176;</p>
//
//             <button onClick={props.reset}>Reset</button>
//
//         </div>
//
//     )
//
// })
//
//
// ReactDOM.render(<TempManager/>, document.getElementById('root'))
//
//
//
// //При увеличении времени (при клике на button) компонент TempDisplay
//
// //тоже перерисовывается. Эта перерисовка является избыточной.
//
// //Найдите в чем причина лишних перерисовок.
//
// //Исправленную версию строки напишите в качестве ответа.
//
//
// //Пример ответа: const increaseSeconds = () => setSeconds(seconds + 100)
// import React, { useCallback, useState } from 'react'
//
// import ReactDOM from 'react-dom'
//
//
// export const App = () => {
//
//     const [temp, setTemp] = useState(100)
//
//     const [seconds, setSeconds] = useState(0)
//
//
//     const resetTemp = useCallback(() => setTemp(0), [])
//
//
//     // const incSec = useCallback(() => setSeconds(seconds + 1), [])
//
//     const incSec = useCallback(() => setSeconds(seconds + 1), [seconds])
//
//     return <>
//
//         <TempDisplay temp={temp} resetTemp={resetTemp}/>
//
//         <SecDisplay seconds={seconds} incSec={incSec}/>
//
//     </>
//
// }
//
// const TempDisplay = React.memo((props: any) => {
//
//     console.log('Render TempDisplay')
//
//     return (
//
//         <div style={{marginBottom: '10px'}} onClick={props.reset}>
//
//             <p>
//
//                 <b>Температура: </b>{props.temp} &#176;
//
//             </p>
//
//             <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
//
//         </div>
//
//     )
//
// })
//
//
// const SecDisplay = React.memo((props: any) => {
//
//     console.log('Render SecDisplay')
//
//     return (
//
//         <div>
//
//             <p><b>Секунды:</b> {props.seconds} c </p>
//
//             <button style={{marginRight: '20px'}}
//
//                     onClick={props.incSec}>
//
//                 Увеличить время на 1 секунду
//
//             </button>
//
//         </div>
//
//     )
//
// })
//
//
// ReactDOM.render(<App/>, document.getElementById('root'))
//
//
// // Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
//
// // Найдите в чем причина.
//
// // Исправленную версию строки напишите в качестве ответа
//
//
// // Пример ответа: const incSec = () => setSeconds(seconds + 1)

// import React, {useCallback, useState} from 'react'
//
// import ReactDOM from 'react-dom'
//
//
// export const App = () => {
//
//     const [temp, setTemp] = useState(10)
//
//     const [seconds, setSeconds] = useState(100)
//
//
//     const increaseSeconds = () => setSeconds(seconds + 10)
//
//     // const increaseTemp = XXX
//     const increaseTemp = useCallback(() => setTemp(temp + 1),[temp])
//
//
//     return <>
//
//         <TempDisplay temp={temp} increaseTemp={increaseTemp}/>
//
//
//         <div>
//
//             <b>Секунды :</b> {seconds} с
//
//             <button style={{marginLeft: '15px'}}
//
//                     onClick={increaseSeconds}>
//
//                 Увеличить на 10 секунд
//
//             </button>
//
//         </div>
//
//     </>
//
// }
//
// const TempDisplay = React.memo((props: any) => {
//
//     console.log('Render TempDisplay')
//
//     return (
//
//         <div style={{marginBottom: '15px'}}
//
//              onClick={props.reset}>
//
//             <b>Температура:</b> {props.temp} &#176;
//
//             <button style={{marginLeft: '15px'}}
//
//                     onClick={props.increaseTemp}>
//
//                 Увеличить температуру на 1 градус
//
//             </button>
//
//         </div>
//
//     )
//
// })
//
//
// ReactDOM.render(<App/>, document.getElementById('root'));
//
//
// // Что надо написать вместо XXX для того, чтобы обязательно выполнялись 2 условия:
//
// // 1) При нажатии на кнопку "Увеличить температуру на 1 градус" температура увеличивалась
//
// // 2) Компонент TempDisplay не должен перерисовываться при нажатии на кнопку "Увеличить на 10 секунд"
//
//
// // Пример ответа: useEffect(() => setCounter(count + 1), [count])

// import React, {useCallback, useMemo, useState} from 'react'
//
// import ReactDOM from 'react-dom'
//
//
// type ButtonType = {
//
//     id: number
//
//     title: string
//
//     forAdminOnly: boolean
//
// }
//
// const buttons: ButtonType[] = [
//
//     {id: 1, title: 'delete', forAdminOnly: true},
//
//     {id: 2, title: 'update', forAdminOnly: true},
//
//     {id: 3, title: 'create', forAdminOnly: false},
//
// ]
//
//
// export const App = ({isAdmin}: { isAdmin: boolean }) => {
//
//
//     const [seconds, setSeconds] = useState(0)
//
//
//     const increaseSeconds = () => setSeconds(seconds + 10)
//
//
//     // const correctButtons = XXX(() => {
//     //
//     //     return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//     //
//     // }, [YYY])
//     const correctButtons = useMemo(() => {
//
//         return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//
//     }, [buttons])
//
//
//     return <>
//
//         <ButtonsPanel buttons={correctButtons}/>
//
//         <div>
//
//             <p>
//
//                 <b>Секунды: {seconds}</b>
//
//             </p>
//
//             <button onClick={increaseSeconds}>
//
//                 Увеличить на 10 секунд
//
//             </button>
//
//         </div>
//
//     </>
//
// }
//
//
// const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
//
//     console.log('Render ButtonsPanel')
//
//     return (
//
//         <div style={{marginBottom: '15px'}}>
//
//             <div style={{marginBottom: '15px'}}>
//
//                 <b>Панель с кнопками</b>
//
//             </div>
//
//             <div>
//
//                 {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
//
//             </div>
//
//         </div>
//
//     )
//
// })
//
//
// ReactDOM.render(<App isAdmin={true}/>, document.getElementById('root'))
//
//
// // Что нужно написать вместо XXX и YYY,
//
// // чтобы избавиться от лишнего перерендера компонента ButtonsPanel
//
// // при нажатии на кнопку "Увеличить на 10 секунд" ?
//
//
// // Ответ дайте через пробел: 111 222
*/ // 3 неделя
/*

// import {combineReducers, createStore} from 'redux'
//
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
//
// const usersReducer = (state = initialState, action: any) => {
//
//     return state
//
// }
//
//
// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
//
// const authReducer = (state = authInitialState, action: any) => {
//
//     return state
//
// }
//
//
// const store = createStore(combineReducers({
//
//     users: usersReducer,
//
//     // XXX
//     auth: authReducer
//
// }))
//
//
// store.subscribe(() => {
//
//     const login = store.getState().auth.login
//
//     console.log(login)
//
// })
//
//
// store.dispatch({type: 'ANY'})
//
// export default store;
//
//
// // Что нужно написать вместо XXX, чтобы в консоли увидеть 'Margo'?

// export const reducer = (state: any, action: any) => {
//
//     switch (action.type) {
//
//         case 'TRACK-ADDED':
//
//             return {
//
//                 ...state,
//
//                 [action.trackId]: {
//
//                     id: action.trackId, likesCount: 0
//
//                 }
//
//             }
//
//         default:
//
//             return state
//
//     }
//
// }
//
//
// const addTrackAC = (trackId: number) => ({type: 'TRACK-ADDED', trackId})
//
//
// const state = {
//
//     12: {id: 12, likesCount: 10},
//
//     14: {id: 14, likesCount: 2},
//
//     100: {id: 100, likesCount: 0},
//
// }
//
// const newState = reducer(state,     {id: 300, likesCount: 0},
// )
// // const newState = reducer(state, xxx)
//
// console.log(newState[300].likesCount === 0)
//
//
// // Что нужно написать вместо XXX, чтобы в консоли увидеть true?

// export const reducer = (state: any, action: any) => {
//
//     switch (action.type) {
//
//         case 'TRACK-DELETED':
//
//             return state.filter((track: any) => track.id !== action.trackId)
//
//         default:
//
//             return state
//
//     }
//
// }
//
//
// const deleteTrackAC =(trackId: number) =>({type:'TRACK-DELETED' , trackId})
// // const deleteTrackAC =(trackId: number) =>(XXX)
//
//
//
// const state = [
//
//     {id: 12, likesCount: 10},
//
//     {id: 14, likesCount: 2},
//
//     {id: 100, likesCount: 0}
//
// ]
//
//
// const newState = reducer(state, deleteTrackAC(14))
//
// console.log(newState.length === 2)
//
//
// // Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?

// export const reducer = (state: any, action: any) => {
//
//     switch (action.type) {
//
//         case 'USER-NAME-UPDATED':
//
//             return state
//
//
//         default:
//
//             return state
//
//     }
//
// }
//
//
// const updateUserNameAC = (name: string) => ({type: 'USER-NAME-UPDATED', name})
//
//
//
// const state = {
//
//     count: 10,
//
//     user: {
//
//         name: 'Dimych',
//
//         age: 18,
//
//         isMarried: true,
//
//         status: "offline"
//
//     },
//
//     books: ['you don\'t know JS']
//
// }
//
// const newState = reducer(state, updateUserNameAC('Dmitry'))
//
//
// console.log(newState.user.name === 'Dmitry')
//
// console.log(newState.books === state.books)
//
// console.log(newState.user !== state.user)
//
//
// //Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть:  true true true?
*/ // 4 неделя
/*// type Status = 'Stopped' | 'Playing' | 'Paused'
//
// type StateType = {
//
//     volume: number // in percents
//
//     trackUrl: string // 'https://blabla.com/track01.mp3',
//
//     currentPlayPosition: number // milliseconds,
//
//     status: Status
//
// }
//
// export const playerReducer = (state: StateType, action: any) => {
//
//     switch (action.type) {
//
//         case 'TRACK-VOLUME-CHANGED':
//
//             return {
//
//                 ...state,
//
//                 volume: action.volumeLevel
//                 // XXX
//
//             }
//
//         default:
//
//             return state
//
//     }
//
// }
//
//
// const muteTrackAC = () => ({type: 'TRACK-MUTED'})
//
// const changeVolumeAC = (volumeLevel: number) => ({type: 'TRACK-VOLUME-CHANGED', volumeLevel})
//
// const changeTrackAC = (url: string) => ({type: 'TRACK-URL-CHANGED', url})
//
// const changeTrackPlayStatusAC = (status: Status) => ({type: 'TRACK-STATUS-CHANGED', status})
//
//
// const state: StateType = {
//
//     status: 'Stopped',
//
//     currentPlayPosition: 1213,
//
//     trackUrl: 'https://blabla.com/track01.mp3',
//
//     volume: 100
//
// }
//
// const newState = playerReducer(state, changeVolumeAC(20))
//
// console.log(newState.volume === 20)
//
//
// // Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.

// export const reducer = (state: any, action: any) => {
//
//     switch (action.type) {
//
//         case 'TRACK-DELETED':
//
//             return state.filter((track: any) => track.id !== action.trackId)
//             // return state.filter((track: any) => XXX)
//
//         default:
//
//             return state
//
//     }
//
// }
//
//
// const deleteTrackAC = (trackId: number) => ({type: 'TRACK-DELETED', trackId})
//
//
//
// const state = [
//
//     {id: 12, likesCount: 10},
//
//     {id: 14, likesCount: 2},
//
//     {id: 100, likesCount: 0}
//
// ]
//
// const newState = reducer(state, deleteTrackAC(14))
//
//
// console.log(newState.length === 2)
//
//
//
// // Что нужно написать вместо XXX, чтобы корректно удалить трек и в консоли увидеть true?

// import {combineReducers, createStore} from 'redux'
//
//
// let initialState = {items: [{name: 'Dimych'}, {name: 'Ignat'}]}
//
// const usersReducer = (state = initialState, action: any) => {
//
//     return state
//
// }
//
//
// const store = createStore(combineReducers({
//
//     users: usersReducer
//
// }))
//
//
// // store.XXX(() => {
// //
// //     console.log('state changed')
// //
// // })
// store.XXX(() => {
//
//     console.log('state changed')
//
// })
//
//
// store.dispatch({type: 'ANY'})
//
//
// // Что нужно написать вместо XXX, чтобы в консоли увидеть 'state changed'?

// import {combineReducers, createStore} from 'redux'
//
// import ReactDOM from 'react-dom'
//
// import {Provider, useSelector} from 'react-redux'
//
// import React from 'react'
//
//
// let initialState = {items:
//
//         [
//
//             {id: 1, name: 'Dimych'},
//
//             {id: 2, name: 'Ignat'}
//
//         ]
//
// }
//
// const usersReducer = (state = initialState, action: any) => {
//
//     return state
//
// }
//
//
// let authInitialState = {login: 'Margo', settings: {theme: 'dark'}}
//
// const authReducer = (state = authInitialState, action: any) => {
//
//     return state
//
// }
//
//
// let rootReducer = combineReducers({
//
//     users: usersReducer,
//
//     auth: authReducer
//
// })
//
//
// const store = createStore(rootReducer)
//
// type RootStateType = ReturnType<typeof rootReducer>
//
//
// const selector = (state: RootStateType) => state.users.items
//
//
// const Users = () => {
//
//
//     // const users = XXX
//     const users = selector
//
//
//
//
//
//     return <ul>
//
//         {users.map(u => <li key={u.id}>{u.name}</li>)}
//
//     </ul>
//
// }
//
//
// ReactDOM.render(<div>
//
//         <Provider store={store}>
//
//             <Users/>
//
//         </Provider>
//
//     </div>,
//
//     document.getElementById('root')
//
// )
//
//
// // Что нужно написать вместо XXX, чтобы отрендерить список юзеров?
//
// // ❗ Ответ дать минимально возможным объёмом кода

// import React, { useCallback, useState } from 'react'
//
// import ReactDOM from 'react-dom'
//
//
// export const App = () => {
//
//     const [temp, setTemp] = useState(100)
//
//     const [seconds, setSeconds] = useState(0)
//
//
//     const resetTemp = useCallback(() => setTemp(0), [])
//
//
//     // const incSec = useCallback(() => setSeconds(seconds + 1), [])
//     const incSec = useCallback(() => setSeconds(seconds + 1), [seconds])
//
//
//
//     return <>
//
//         <TempDisplay temp={temp} resetTemp={resetTemp}/>
//
//         <SecDisplay seconds={seconds} incSec={incSec}/>
//
//     </>
//
// }
//
// const TempDisplay = React.memo((props: any) => {
//
//     console.log('Render TempDisplay')
//
//     return (
//
//         <div style={{marginBottom: '10px'}} onClick={props.reset}>
//
//             <p>
//
//                 <b>Температура: </b>{props.temp} &#176;
//
//             </p>
//
//             <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
//
//         </div>
//
//     )
//
// })
//
//
// const SecDisplay = React.memo((props: any) => {
//
//     console.log('Render SecDisplay')
//
//     return (
//
//         <div>
//
//             <p><b>Секунды:</b> {props.seconds} c </p>
//
//             <button style={{marginRight: '20px'}}
//
//                     onClick={props.incSec}>
//
//                 Увеличить время на 1 секунду
//
//             </button>
//
//         </div>
//
//     )
//
// })
//
//
// ReactDOM.render(<App/>, document.getElementById('root'))
//
//
// // Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
//
// // Найдите в чем причина.
//
// // Исправленную версию строки напишите в качестве ответа
//
//
// // Пример ответа: const incSec = () => setSeconds(seconds + 1)

// import React, {useMemo, useState} from 'react'
//
// import ReactDOM from 'react-dom'
//
//
// type ButtonType = {
//
//     id: number
//
//     title: string
//
//     forAdminOnly: boolean
//
// }
//
// const buttons: ButtonType[] = [
//
//     {id: 1, title: 'delete', forAdminOnly: true},
//
//     {id: 2, title: 'update', forAdminOnly: true},
//
//     {id: 3, title: 'create', forAdminOnly: false},
//
// ]
//
//
// export const App = ({isAdmin}: { isAdmin: boolean }) => {
//
//
//     const [seconds, setSeconds] = useState(0)
//
//
//     const increaseSeconds = () => setSeconds(seconds + 10)
//
//
//     // const correctButtons = XXX(() => {
//     //
//     //     return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//     //
//     // }, [YYY])
//     const correctButtons = useMemo(() => {
//
//         return buttons.filter(b => isAdmin ? true : !b.forAdminOnly)
//
//     }, [buttons])
//
//
//     return <>
//
//         <ButtonsPanel buttons={correctButtons}/>
//
//         <div>
//
//             <p>
//
//                 <b>Секунды: {seconds}</b>
//
//             </p>
//
//             <button onClick={increaseSeconds}>
//
//                 Увеличить на 10 секунд
//
//             </button>
//
//         </div>
//
//     </>
//
// }
//
//
// const ButtonsPanel = React.memo((props: { buttons: Array<ButtonType> }) => {
//
//     console.log('Render ButtonsPanel')
//
//     return (
//
//         <div style={{marginBottom: '15px'}}>
//
//             <div style={{marginBottom: '15px'}}>
//
//                 <b>Панель с кнопками</b>
//
//             </div>
//
//             <div>
//
//                 {props.buttons.map(b => <button key={b.id}>{b.title}</button>)}
//
//             </div>
//
//         </div>
//
//     )
//
// })
//
//
// ReactDOM.render(<App isAdmin={true}/>, document.getElementById('root'))
//
//
// // Что нужно написать вместо XXX и YYY,
//
// // чтобы избавиться от лишнего перерендера компонента ButtonsPanel
//
// // при нажатии на кнопку "Увеличить на 10 секунд" ?
//
//
// // Ответ дайте через пробел: 111 222

// export const reducer = (state: any, action: any) => {
//
//     switch (action.type) {
//
//         case 'USER-NAME-UPDATED':
//
//             return {...state, user: {name: action.name}}
//         // return XXX
//
//
//         default:
//
//             return state
//
//     }
//
// }
//
//
// const updateUserNameAC = (name: string) => ({type: 'USER-NAME-UPDATED', name})
//
//
// const state = {
//
//     count: 10,
//
//     user: {
//
//         name: 'Dimych',
//
//         age: 18,
//
//         isMarried: true,
//
//         status: "offline"
//
//     },
//
//     books: ['you don\'t know JS']
//
// }
//
// const newState = reducer(state, updateUserNameAC('Dmitry'))
//
//
// console.log(newState.user.name === 'Dmitry')
//
// console.log(newState.books === state.books)
//
// console.log(newState.user !== state.user)
//
//
// //Что нужно написать вместо XXX, чтобы корректно обновить имя пользователя и в консоли увидеть:  true true true?

// import React, {useState, useReducer, useEffect} from 'react';
//
// import ReactDOM from 'react-dom';
//
// import './index.css';
//
//
// const changeCounter = (state: number, action: any): number => {
//
//     switch (action.type) {
//
//         case "INC_VALUE":
//
//             return state + 1
//
//         case "RESET":
//
//             return 0
//
//         case "DEC_VALUE":
//
//             return state - 1
//
//         default:
//
//             return state
//
//     }
//
// }
//
//
// function Counter() {
//
//     const [value, setValue] = useReducer(changeCounter, 0)
//
//     const [isCounter, setIsCounter] = useState(true)
//
//     const commonStyles: React.CSSProperties = {
//
//         border: "1px solid black",
//
//         margin: "100px auto",
//
//         width: "300px",
//
//         height: "150px",
//
//         textAlign: "center",
//
//     }
//
//     const btnStyles: React.CSSProperties = {
//
//         color: "white",
//
//         fontWeight: "bold",
//
//         backgroundColor: "darkgray",
//
//         borderRadius: "3px",
//
//         minWidth: "40px"
//
//     }
//
//
//     return (
//
//         <div style={commonStyles}>{
//
//             isCounter
//
//                 ? <div >
//
//                     <div style={{marginBottom: "20px"}}>
//
//                         <h2>{value}</h2>
//
//                         <button
//
//                             style={{...btnStyles, backgroundColor: "red"}}
//
//                             onClick={() => setIsCounter(false)}>OFF</button>
//
//                     </div>
//
//                     <button style={btnStyles} onClick={() => setValue({type: "INC_VALUE"})}>+</button>
//
//                     <button style={btnStyles} onClick={() => setValue({type: "RESET"})}>0</button>
//
//                     <button style={btnStyles} onClick={() => setValue({type: "DEC_VALUE"})}>-</button>
//
//
//                 </div>
//
//                 : <div style={{textAlign: "center"}}>
//
//                     <h2>Counter not working</h2>
//
//                     <button
//
//                         style={{...btnStyles, backgroundColor: "green"}}
//
//                         onClick={() => setIsCounter(true)}>ON</button>
//
//                 </div>
//
//         }
//
//         </div>
//
//     )
//
// }
//
//
//
// ReactDOM.render(
//
//     <Counter/>, document.getElementById('root')
//
// );
//
// // Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел.

// import React from 'react'
//
// import { createStore } from 'redux'
//
// import { Provider, useSelector, useDispatch } from 'react-redux'
//
// import ReactDOM from 'react-dom'
//
//
// type StudentType = {
//
//     id: number
//
//     name: string
//
//     age: number
//
// }
//
//
// const initState = {
//
//     students:
//
//         [
//
//             {id: 1, name: 'Bob', age: 23},
//
//             {id: 2, name: 'Alex', age: 22}
//
//         ] as Array<StudentType>
//
// }
//
// type AddStudentAT = {
//
//     type: 'ADD-STUDENT'
//
//     name: string
//
//     age: number
//
//     id: number
//
// }
//
//
// type InitialStateType = typeof initState
//
//
// const studentsReducer = (state: InitialStateType = initState, action: AddStudentAT): InitialStateType => {
//
//     switch (action.type) {
//
//         case 'ADD-STUDENT':
//
//             return {
//
//                 ...state,
//
//                 students: [...state.students, {
//
//                     name: action.name,
//
//                     age: action.age,
//
//                     id: action.id
//
//                 }]
//
//             }
//
//     }
//
//     return state
//
// }
//
//
// const appStore = createStore(studentsReducer)
//
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
//
// const StudentList = () => {
//
//     const students = useSelector((state: RootStateType) => state.students)
//
//     return (
//
//         <ul>
//
//             {students.map(s => <li key={s.id}>{`${s.name}. ${s.age} years.`}</li>)}
//
//         </ul>
//
//     )
//
// }
//
// const App = () => {
//
//     return <StudentList/>
//
// }
//
//
// ReactDOM.render(<div>
//
//         <Provider store={appStore}>
//
//             <App/>
//
//         </Provider>
//
//     </div>,
//
//     document.getElementById('root')
//
// )
//
//
// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы отобразился список студентов?

// import {createStore} from 'redux'
//
// import ReactDOM from 'react-dom'
//
// import {Provider, useSelector, useDispatch} from 'react-redux'
//
// import React from 'react'
//
//
// const students = {
//
//     students: [
//
//         {id: 1, name: 'Bob'},
//
//         {id: 2, name: 'Alex'},
//
//         {id: 3, name: 'Donald'},
//
//         {id: 4, name: 'Ann'},
//
//     ]
//
// }
//
// type RemoveStudentAT = {
//
//     type: "REMOVE-STUDENT"
//
//     id: number
//
// }
//
// const RemoveStudentAC = (id: number): RemoveStudentAT => ({
//
//     type: "REMOVE-STUDENT",
//
//     id
//
// })
//
//
// const studentsReducer = (state = students, action: RemoveStudentAT) => {
//
//     switch (action.type) {
//
//         case "REMOVE-STUDENT":
//
//             return {
//
//                 ...state,
//
//                 students: state.students.filter(s => s.id !== action.id)
//
//             }
//
//     }
//
//     return state
//
// }
//
//
// const store = createStore(studentsReducer)
//
// type RootStateType = ReturnType<typeof studentsReducer>
//
//
//
// const StudentList = () => {
//
//     const listItemStyles = {
//
//         width: "100px",
//
//         borderBottom: "1px solid gray",
//
//         cursor: "pointer",
//
//     }
//
//     const students = useSelector((state: RootStateType) => state.students)
//
//     const dispatch = useDispatch()
//
//     const studentsList = students.map(s => {
//
//         const removeStudent = () => {
//
//             dispatch(RemoveStudentAC( s.id))
//
//         }
//
//         return (
//
//             <li key={s.id}
//
//                 style={listItemStyles}
//
//                 onClick={removeStudent}>
//
//                 {s.name}
//
//             </li>)
//
//     })
//
//     return (
//
//         <ol>
//
//             {studentsList}
//
//         </ol>
//
//
//     )
//
// }
//
//
//
// ReactDOM.render(<div>
//
//         <Provider store={store}>
//
//             <StudentList/>
//
//         </Provider>
//
//     </div>,
//
//     document.getElementById('root')
//
// )
//
//
// // Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
//
// // удалялся из списка? Напишите через пробел.*/ // total
