/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/



/*//1___________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?
*!/
/!*
import React, {useState, MouseEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function ColorButton() {

    const [isColored, setIsColored] = useState<boolean>(false)

    return (

        <button

            style={{ backgroundColor: `${ XXX === true ? "red": ""}`}}

            onClick={()=>setIsColored(true)}

        >

            Меняю цвет по клику

        </button>

    )

}



ReactDOM.render(

    <ColorButton/>, document.getElementById('root')

);


// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?

*!/ // isColored

//2___________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо вставить вместо XXX, чтобы код корректно работал со списком пользователей?
*!/
/!*
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    const getUser = (user: string, i: number) => <li key={i}>{user}</li>


    const usersList = (XXX === 0)

        ? <p>List is empty</p>

        :  <ul>

            { users.map(getUser)}

        </ul>


    return (

        <main>

            <button onClick={()=>setUsers([])}>Clear list</button>

            <h4>User list:</h4>

            {usersList}

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?
*!/ // users.length

//3___________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо вставить вместо XXX, чтобы код работал нормально?
*!/
/!*
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function PasswordChecker() {

    const [password, setPassword] = useState<string>("")

    return (

        <main>

            <p>Your password must have more than 8 charters!</p>

            <input

                placeholder={"Enter your password"}

                value={password}

                onChange={e => setPassword(e.currentTarget.value)}

                type={"password"}

            />

            {xxx < 9 && <p style={{color: "red"}}>The password is too short!</p>}

        </main>

    )

}


ReactDOM.render(

    <PasswordChecker/>, document.getElementById('root')

);


// Что надо вставить вместо XXX, чтобы код работал нормально?
*!/ // password.length

//4___________________________________________________________________________________________________________________
/!*
Вопрос:

    Что нужно написать вместо XXX, чтобы кнопка отправки комментария отрабатывала верно:

    первоначально кнопка должна быть в состоянии disable, а после успешного выполнения условия (проверка на длину комментария) должна раздизаблиться.
*!/
/!*import React, { ChangeEvent, useState } from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function LongCommentChecker() {

    const minSizeComment = 5

    const [isCommentReady, setIsCommentReady] = useState<boolean>(false)

    const [comment, setComment] = useState<string>('')


    const onClickSendComment = () => {

        if (comment.length > minSizeComment) {

            setComment('')

        }

    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {

        const newComment = e.currentTarget.value

        if (newComment.length > minSizeComment) {

            setIsCommentReady(true)

        } else {

            setIsCommentReady(false)

        }

        setComment(newComment)

    }


    return (

        <main>

            <textarea

                placeholder={'Your comment must have more than 5 charters'}

                value={comment}

                onChange={onChangeHandler}

            />

            <div>

                <button

                    disabled={xxx}

                    onClick={onClickSendComment}>

                    Send comment

                </button>

            </div>

        </main>

    )

}


ReactDOM.render(<LongCommentChecker/>, document.getElementById('root'));


// Что нужно написать вместо XXX, чтобы кнопка отправки комментария отрабатывала верно:

// первоначально кнопка должна быть в состоянии disable, а после успешного выполнения условия

// (проверка на длину комментария) должна раздизаблиться.*!/ // !isCommentReady

//5___________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо вставить вместо XXX, чтобы круг рандомно менял цвет по клику?
*!/
/!*
import React, {ChangeEvent, useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function Colorize() {


    const [color, setColor] = useState<string>("black")

    const colors = ["red", "yellow", "green", "blue", "violet", "chartreuse"]


    const styles = {

        width: "100px",

        height: "100px",

        borderRadius: "50%",

        backgroundColor: "black"

    }


    const getColor = (colors: string[]) => {

        const nextColor = colors[Math.floor(Math.random() * colors.length)]

        return nextColor

    }


    return (

        <main>

            <div style={{...styles, backgroundColor: color}}/>

            <div>

                <button

                    onClick={() => setColor(xxx)}

                >

                    Get random color

                </button>

            </div>

        </main>

    )

}


ReactDOM.render(

    <Colorize/>, document.getElementById('root')

);

// Что надо вставить вместо XXX, чтобы круг менял цвет по клику?
*!/ // getColor(colors)

//6___________________________________________________________________________________________________________________
/!*
Вопрос:

    Те пользователи, у которых в стэке пять и более технологий, должны в списке быть отмечены, как готовые к работе. Что надо вставить вместо XXX, чтобы код работал, как необходимо?

*!/
/!*
import React, { ChangeEvent, useState } from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    personalData: PersonalDataType

}

type PersonalDataType = {

    gender: string

    age: number

    technologies: Array<TechnologiesType>

}

type TechnologiesType = 'HTML' | 'CSS' | 'React' | 'JS/TS' | 'Redux'


function UsersList() {


    const [users, setUsers] = useState<Array<UserType>>([

        {

            id: 1,

            name: 'Bob',

            personalData: {

                gender: 'male',

                age: 23,

                technologies: ['HTML', 'CSS', 'React', 'JS/TS', 'Redux']

            }

        },

        {

            id: 2,

            name: 'Alex',

            personalData: {

                gender: 'male',

                age: 21,

                technologies: ['HTML', 'CSS', 'React']

            }

        },

        {

            id: 3,

            name: 'Ann',

            personalData: {

                gender: 'female',

                age: 26,

                technologies: ['HTML', 'CSS', 'JS/TS']

            }

        },

        {

            id: 4,

            name: 'Helen',

            personalData: {

                gender: 'female',

                age: 31,

                technologies: ['HTML', 'CSS']

            }

        },

        {

            id: 5,

            name: 'Donald',

            personalData: {

                gender: 'male',

                age: 28,

                technologies: ['React', 'JS/TS', 'Redux']

            }

        },

    ])



    return <ul>

        {users.map(u => {

            return (

                u.personalData.technologies.length >= 5

                    ? <li key={u.id}>

                        {`User ${u.name}. ${u.personalData.age}. Ready to work.`}

                    </li>

                    : <li key={u.id}>

                        {`User ${u.name}. ${u.personalData.age}. `}

                    </li>)

        })}

    </ul>

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Те пользователи, у которых в стэке пять и более технологий, должны в списке

// быть отмечены, как готовые к работе.

// Что надо вставить вместо XXX, чтобы код работал нормально?
*!/ // personalData.technologies*/ // 1 неделя
/*
//1_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Дан список студентов и структура, которая содержит список друзей каждого из студентов. Что вернёт выражение: Array.isArray(friends)?
*!/
/!*type Student = {

    id: number

    name: string

}

type Students = Array<Student>

type Friends = {

    [key: string]: Array<string>

}


export const students: Students = [

    {id: 1, name: "Bob"},

    {id: 2, name: "Alex"},

    {id: 3, name: "Ann"},

    {id: 4, name: "Charley"},

]


export const friends: Friends = {

    1: ["Oliver", "Jack", "Oscar",],

    2: ["Jack", "Lewis", "Thomas",],

    3: ["William", "Michael", "Lewis",],

    4: ["Oscar", "James", "William",],

}


//Дан список студентов и структура,

//которая содержит список друзей каждого из студентов.

//Id студента является ключом к массиву его друзей.

//Что вернёт выражение: Array.isArray(friends)?
 *!/// false +

//2_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что вернёт выражение: Array.isArray(students)?
*!/
/!*
type StudentType = {

    id: number

    name: string

}

type Students = Array<StudentType>

type Friends = {

    [key: string]: Array<string>

}


export const students: Students = [

    {id: 1, name: "Bob"},

    {id: 2, name: "Alex"},

    {id: 3, name: "Ann"},

    {id: 4, name: "Charley"},

]


export const friends: Friends = {

    1: ["Oliver", "Jack", "Oscar",],

    2: ["Jack", "Lewis", "Thomas",],

    3: ["William", "Michael", "Lewis",],

    4: ["Oscar", "James", "William",],

}


//Дан список студентов и структура,

//которая содержит список друзей каждого из студентов

//Id студента является ключом к массиву его друзей.

//Что вернёт выражение Array.isArray(students)?

*!/ //// true +

//3_____________________________________________________________________________________________________________________
/!*
Вопрос:
    Имеют ли студенты students[1] и students[3] общих друзей? Если да, напишите в ответе имя общего друга в кавычках, если нет - напишите в ответе false.
*!/

/!*
type StudentType = {

    id: number

    name: string

    age: number

}


type FriendsType = {

    [key: string]: Array<string>

}



export const students: Array<StudentType> = [

    {id: 1, name: "Bob", age: 34},

    {id: 2, name: "Alex", age: 23},

    {id: 3, name: "Ann", age: 25},

    {id: 4, name: "Charley", age: 20},

]


export const friends: FriendsType = {

    1: ["Jack","Oliver", "Oscar",],

    2: ["Jack", "Lewis", "Thomas",],

    3: ["William",  "Lewis","Michael"],

    4: ["Oscar", "Thomas", "William",],

}




//Дан массив студентов и структура,

//которая содержит список друзей каждого из студентов.

//Id студента является ключом к массиву его друзей.

//Имеют ли студенты students[1] и students[3] общих друзей?

//Если да, напишите в ответе имя общего друга, если нет - напишите в ответе false.
*!/ //"Thomas"

//4_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Какое значение лежит тут: friends[3][1]?
*!/
/!*type StudentType = {

    id: number

    name: string

}


type FriendsType = {

    [key: string]: Array<string>

}


export const students: Array<StudentType> = [

    {id: 1, name: "Bob"},

    {id: 2, name: "Alex"},

    {id: 3, name: "Ann"},

    {id: 4, name: "Charley"},

]


export const friends: FriendsType = {

    1: ["Oliver", "Jack", "Oscar",],

    2: ["Jack", "Lewis", "Thomas",],

    3: ["William", "Michael", "Lewis",],

    4: ["Oscar", "James", "William",],

}



//Дан список студентов и структура,

//которая содержит список друзей каждого из студентов.

//Id студента является ключом к массиву его друзей.

//Какое значение лежит тут:  friends[3][1]? *!/ // "Michael"

//5_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Какое значение лежит тут: friends[students[1].id][2]?
*!/
/!*
type StudentType = {

    id: number

    name: string

}


type FriendsType = {

    [key: string]: Array<string>

}


export const students: Array<StudentType> = [

    {id: 1, name: "Bob"},

    {id: 2, name: "Alex"},

    {id: 3, name: "Ann"},

    {id: 4, name: "Charley"},

]


export const friends: FriendsType = {

    1: ["Oliver", "Jack", "Oscar",],

    2: ["Jack", "Lewis", "Thomas",],

    3: ["William", "Michael", "Lewis",],

    4: ["Oscar", "James", "William",],

}

//Дан список студентов и структура,

//которая содержит список друзей каждого из студентов.

//Id студента является ключом к массиву его друзей.

//Какое значение лежит тут: friends[students[1].id][2]?
*!/ //// "Thomas"


//6_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Какое значение лежит тут: friends[students[0].id][3]?
*!/
/!*
type StudentType = {

    id: number

    name: string

}


type FriendsType = {

    [key: string]: Array<String>

}


export const students: Array<StudentType> = [

    {id: 1, name: "Bob"},

    {id: 2, name: "Alex"},

    {id: 3, name: "Ann"},

    {id: 4, name: "Charley"},

]


export const friends: FriendsType = {

    1: ["Oliver", "Jack", "Oscar",],

    2: ["Jack", "Lewis", "Thomas",],

    3: ["William", "Michael", "Lewis",],

    4: ["Oscar", "James", "William",],

}


//Дан список студентов и структура,

//которая содержит список друзей каждого из студентов.

//Id студента является ключом к массиву его друзей.

//Какое значение лежит тут: friends[students[0].id][3]?
*!/ //undefined

//7_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Дан список самураев из инкубатора и структура, хранящая данные о курсах,

    которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти. Так же дана функция updateCourseStatus, которая позволяет отметить курс как пройденный самураем или снять такую отметку. Что надо написать вместо XXX, чтобы функция работала корректно?

*!/

/!*
import React, {useState} from "react";


type samuraiType = {

    id: string

    name: string

    status: "online" | "offline"

}

type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"

type CourseType = {

    name: CourseNameType

    mentor: string

    isDone: boolean

}

type TechnologiesType = {

    [userID: string]: Array<CourseType>

}


const samuraiID_1 = "64jf-87kg"

const samuraiID_2 = "90lg-34ks"

const samuraiID_3 = "12jm-05fd"


export const samurai: Array<samuraiType> = [

    {id: samuraiID_1, name: "Bob", status: "online"},

    {id: samuraiID_2, name: "Alex", status: "offline"},

    {id: samuraiID_3, name: "Ann", status: "offline"},

]


export const technologies: TechnologiesType = {

    [samuraiID_1]: [

        {name: "HTML", mentor: "Svetlana", isDone: true},

        {name: "JS", mentor: "Viktor", isDone: true},

        {name: "React", mentor: "Dmitrij", isDone: false},

        {name: "Redux", mentor: "Valera", isDone: false},

        {name: "HomeWorks", mentor: "Ignat", isDone: true},

    ],

    [samuraiID_2]: [

        {name: "HTML", mentor: "Svetlana", isDone: true},

        {name: "JS", mentor: "Viktor", isDone: true},

        {name: "React", mentor: "Dmitrij", isDone: true},

        {name: "Redux", mentor: "Valera", isDone: false},

        {name: "HomeWorks", mentor: "Ignat", isDone: true},

    ],

    [samuraiID_3]: [

        {name: "HTML", mentor: "Svetlana", isDone: true},

        {name: "JS", mentor: "Viktor", isDone: true},

        {name: "React", mentor: "Dmitrij", isDone: false},

        {name: "Redux", mentor: "Valera", isDone: false},

        {name: "HomeWorks", mentor: "Ignat", isDone: false},

    ],

}


export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {

    return {...technologies,

        [samuraiID]: technologies[xxx].map(c => c.name === name ? {...c, isDone} : c)

    }

}

// Дан список самураев из инкубатора и структура, хранящая данные о курсах,

// которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.

// Так же дана функция updateCourseStatus,

// которая позволяет отметить курс как пройденный самураем или снять такую отметку

// Что надо написать вместо XXX, чтобы функция работала?
*!/ // samuraiID +
*/ // 2 неделя
/*
//1_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо ххх, чтобы функция работала?
*!/
/!*type StudentType = {

    id: number

    name: string

}


type FriendsType = {

    [key: string]: Array<string>

}


export const students: Array<StudentType> = [

    {id: 1, name: "Bob"},

    {id: 2, name: "Alex"},

    {id: 3, name: "Ann"},

    {id: 4, name: "Charley"},

]


export const friends: FriendsType = {

    1: ["Oliver", "Jack", "Oscar",],

    2: ["Jack", "Lewis", "Thomas",],

    3: ["William", "Michael", "Lewis",],

    4: ["Oscar", "James", "William",],

}


const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {

    const result: Array<string> = []

    friends[st_1.id].forEach(f => friends[xxx].includes(f)? result.push(f): null)

    return result

}




//Дан массив студентов и структура,

//которая содержит список друзей каждого из студентов.

// Так же дана функция  getMutualFriends, проверяющая наличие общих друзей

// у двух выбранных студентов.

//Функция принимает параметром два объекта типа StudentType

// и возвращает массив с именами общих друзей,

//если они есть и пустой массив, если таковых нету.

// Что надо написать вместо ххх, чтобы функция работала?*!/ // st_2.id

//2_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо ххх, чтобы функция работала корректно?
*!/
/!*import React, {useState} from "react";


type UserType = {

    id: number

    name: string

    status: "online" | "offline"

}


type AddressType = {

    country: string

    city: string

    email: string

}


type AdressesType = {

    [userID: string]: AddressType

}



const users: Array<UserType> = [

    {id: 1, name: "Bob", status: "online"},

    {id: 2, name: "Alex", status: "offline"},

    {id: 3, name: "Ann", status: "offline"},

]


export const addresses: AdressesType = {

    1: {country: "Russia", city: "Moscow", email: "hey@email.com"},

    2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},

    3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},


}


export const changeUserStatus = (userID: number, status: string) => {

    return users.map(u => u.id === userID ? {...u, status} : u)

}







// Дан список пользователей и структура, хранящая адреса пользователей.

// Так же дана функция changeUserStatus, которая меняет статус пользователя.

// Что надо написать вместо ххх, чтобы функция работала корректно?*!/ // map

//3_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо ххх, чтобы функция работала корректно?
*!/
/!*import React, {useState} from "react";


type UserType = {

    id: number

    name: string

    status: "online" | "offline"

}


type AddressType = {

    country: string

    city: string

    email: string

}


type AdressesType = {

    [userID: string]: AddressType

}


const users: Array<UserType> = [

    {id: 1, name: "Bob", status: "online"},

    {id: 2, name: "Alex", status: "offline"},

    {id: 3, name: "Ann", status: "offline"},

]


const addresses: AdressesType = {

    1: {country: "Russia", city: "Moscow", email: "hey@email.com"},

    2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},

    3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},


}


const updateUserAddress = (userID: number, key: string, newValue: string) => {

    return {...addresses,

        [userID]: {...addresses[xxx], [key]: newValue}

    }

}


// Дан список пользователей и структура, хранящая адреса пользователей.

// Так же дана функция updateUserAddress,

// которая обновляет указанное в параметрах поле в адресе пользователя.

// Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")

// Что надо написать вместо ххх, чтобы функция работала корректно?*!/ // userID
//4_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо ххх, чтобы функция работала корректно?
*!/
/!*import React, {useState} from "react";


type samuraiType = {

    id: string

    name: string

    status: "online" | "offline"

}

type CourseNameType = "HTML"|"JS"|"React"|"Redux"|"HomeWorks"

type CourseType = {

    name: CourseNameType

    mentor: string

    isDone: boolean

}

type TechnologiesType = {

    [userID: string]: Array<CourseType>

}


const samuraiID_1 = "64jf-87kg"

const samuraiID_2 = "90lg-34ks"

const samuraiID_3 = "12jm-05fd"


export const samurai: Array<samuraiType> = [

    {id: samuraiID_1, name: "Bob", status: "online"},

    {id: samuraiID_2, name: "Alex", status: "offline"},

    {id: samuraiID_3, name: "Ann", status: "offline"},

]


export const technologies: TechnologiesType = {

    [samuraiID_1]: [

        {name: "HTML", mentor: "Svetlana", isDone: true},

        {name: "JS", mentor: "Viktor", isDone: true},

        {name: "React", mentor: "Dmitrij", isDone: false},

        {name: "Redux", mentor: "Valera", isDone: false},

        {name: "HomeWorks", mentor: "Ignat", isDone: true},

    ],

    [samuraiID_2]: [

        {name: "HTML", mentor: "Svetlana", isDone: true},

        {name: "JS", mentor: "Viktor", isDone: true},

        {name: "React", mentor: "Dmitrij", isDone: true},

        {name: "Redux", mentor: "Valera", isDone: false},

        {name: "HomeWorks", mentor: "Ignat", isDone: true},

    ],

    [samuraiID_3]: [

        {name: "HTML", mentor: "Svetlana", isDone: true},

        {name: "JS", mentor: "Viktor", isDone: true},

        {name: "React", mentor: "Dmitrij", isDone: false},

        {name: "Redux", mentor: "Valera", isDone: false},

        {name: "HomeWorks", mentor: "Ignat", isDone: false},

    ],

}


export const updateCourseStatus = (samuraiID: string, name: CourseNameType, isDone: boolean) => {

    return {...technologies,

        [samuraiID]: technologies[samuraiID].map(c => c.name === name ? {...c, isDone} : c)

    }

}

// Дан список самураев из инкубатора и структура, хранящая данные о курсах,

// которые самурай уже прошёл, а так же о тех курсах, которые ему ещё предстоит пройти.

// Так же дана функция updateCourseStatus,

// которая позволяет отметить курс как пройденный самураем или снять такую отметку

// Что надо написать вместо ххх, чтобы функция работала корректно?*!/ // samuraiID
*/ // 3 неделя
/*//1____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо ХХХ, чтобы функция calculator работала?
*!/
/!*type ActionType = {

    type: "SUM"|"SUB"|"MULT"|"DIV"

    payload: number

}


export const calculator = (state: number, action: ActionType) => {

    switch (action.type) {

        case "SUM":

            return state + action.payload

        case "SUB":

            return state - action.payload

        case "DIV":

            return state / action.payload

        default:

            return state

    }

}


//Что надо написать вместо ХХХ, чтобы функция calculator работала?*!/ // action.type
//2____________________________________________________________________________________________________________________
/!*
Вопрос:

    Обработка какого action.type не предусмотрена в функции calculator?
*!/
/!*type ActionType = {

    type: "SUM"|"SUB"|"MULT"|"DIV"

    payload: number

}


export const calculator = (state: number, action: ActionType): number => {

    switch (action.type) {

        case "SUM":

            return state + action.payload

        case "SUB":

            return state - action.payload

        case "DIV":

            return state / action.payload

        default:

            return state

    }

}


//Обработка какого action.type не предусмотрена в функции calculator?*!/ // "MULT"
//3____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо XXX, что бы переменная result содержала значение 5?
*!/
/!*type ActionType = {

    type: "SUM"|"SUB"|"MULT"|"DIV"

    payload: number

}


export const calculator = (state: number, action: ActionType): number => {

    switch (action.type) {

        case "SUM":

            return state + action.payload

        case "SUB":

            return state - action.payload

        case "DIV":

            return state / action.payload

        case "MULT":

            return state * action.payload

        default:

            return state

    }

}


const result = calculator(10, {XXX, payload: 5})

console.log(result)

//Что надо написать вместо XXX, что бы переменная result содержала значение 5?*!/ //
//4____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?
*!/
/!*type ActionType = {

    type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"

    payload: number

}


export const calculator = (state: number, action: ActionType): number => {

    switch (action.type) {

        case "SUM":

            return state + action.payload

        case "SUB":

            return state - action.payload

        case "DIV":

            return state / action.payload

        case "EXP":

            return state ** action.payload

        default:

            return state

    }

}
 // 10


//Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?*!/
//5____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
*!/
/!*type ActionType = {

    type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"

    payload: number

}


export const calculator = (state: number, action: ActionType): number => {

    switch (action.type) {

        case "SUM":

            return state + action.payload

        case "SUB":

            return state - action.payload

        case "DIV":

            return state / action.payload

        case "MULT":

            return state * action.payload

        case "EXP":

            return state ** action.payload

        default:

            return state

    }

}

const result = calculator(10, {type:'EXP', payload: 0})

if (!(result - 1)){

    console.log("IT-INCUBATOR")

}
 // type:'EXP' ?


//Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?*!/
//6____________________________________________________________________________________________________________________
/!*
Вопрос:

    Какой код должен быть написан вместо XXX и YYY в типе ChangeUserPasswordTypeAT, что бы редьюсер работал?

    В ответе напишите через пробел: XXX YYY.
*!/
/!*
type UserType = {

    id: number

    userName: string

    email: string

    password: string

}


type ChangeUserPasswordTypeAT = {

    type: "CHANGE-USER-PASSWORD"

    payload: {

        id: number

        newPassword: string

    }

}


export const userReducer =

    (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {

        switch (action.type) {

            case "CHANGE-USER-PASSWORD":

                return state.map(u =>

                    u.id === action.payload.id

                        ? {...u, password: action.payload.newPassword}

                        : u)

            default:

                return state

        }

    }


//Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?

//В ответе напишите через пробел: XXX  YYY*!/ // id: number newPassword: string*/ // 4 неделя
/*
//1____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?
*!/
/!*import React, {useState, MouseEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function ColorButton() {

    const [isColored, setIsColored] = useState<boolean>(false)

    return (

        <button

            style={{ backgroundColor: `${ XXX === true ? "red": ""}`}}

            onClick={()=>setIsColored(true)}

        >

            Меняю цвет по клику

        </button>

    )

}



ReactDOM.render(

    <ColorButton/>, document.getElementById('root')

);


// Что надо написать вместо XXX, чтобы при клике кнопка становилась красной?*!/ // isColored
//2____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо вставить вместо XXX, чтобы код корректно работал со списком пользователей?
*!/
/!*import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    const getUser = (user: string, i: number) => <li key={i}>{user}</li>


    const usersList = (users.length === 0)

        ? <p>List is empty</p>

        :  <ul>

            { users.map(getUser)}

        </ul>


    return (

        <main>

            <button onClick={()=>setUsers([])}>Clear list</button>

            <h4>User list:</h4>

            {usersList}

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо вставить вместо XXX, чтобы код корректно работал  со списком пользователей?*!/ // users.length
//3____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо вставить вместо XXX, чтобы код работал нормально?
*!/
/!*import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function PasswordChecker() {

    const [password, setPassword] = useState<string>("")

    return (

        <main>

            <p>Your password must have more than 8 charters!</p>

            <input

                placeholder={"Enter your password"}

                value={password}

                onChange={e => setPassword(e.currentTarget.value)}

                type={"password"}

            />

            {password.length < 9 && <p style={{color: "red"}}>The password is too short!</p>}

        </main>

    )

}


ReactDOM.render(

    <PasswordChecker/>, document.getElementById('root')

);


// Что надо вставить вместо XXX, чтобы код работал нормально?*!/ // password.length

//4____________________________________________________________________________________________________________________
/!*
Вопрос:

    Какое значение лежит тут: friends[3][1]?
*!/
/!*type StudentType = {

    id: number

    name: string

}


type FriendsType = {

    [key: string]: Array<string>

}


export const students: Array<StudentType> = [

    {id: 1, name: "Bob"},

    {id: 2, name: "Alex"},

    {id: 3, name: "Ann"},

    {id: 4, name: "Charley"},

]


export const friends: FriendsType = {

    1: ["Oliver", "Jack", "Oscar",],

    2: ["Jack", "Lewis", "Thomas",],

    3: ["William", "Michael", "Lewis",],

    4: ["Oscar", "James", "William",],

}


//Дан список студентов и структура,

//которая содержит список друзей каждого из студентов.

//Id студента является ключом к массиву его друзей.

//Какое значение лежит тут:  friends[3][1]?*!/ // "Michael"

//5____________________________________________________________________________________________________________________
/!*
Вопрос:

    Какое значение лежит тут: friends[students[0].id][3]?
*!/
/!*type StudentType = {

    id: number

    name: string

}


type FriendsType = {

    [key: string]: Array<String>

}


export const students: Array<StudentType> = [

    {id: 1, name: "Bob"},

    {id: 2, name: "Alex"},

    {id: 3, name: "Ann"},

    {id: 4, name: "Charley"},

]


export const friends: FriendsType = {

    1: ["Oliver", "Jack", "Oscar",],

    2: ["Jack", "Lewis", "Thomas",],

    3: ["William", "Michael", "Lewis",],

    4: ["Oscar", "James", "William",],

}
console.log(friends[students[0].id][3])

//Дан список студентов и структура,

//которая содержит список друзей каждого из студентов.

//Id студента является ключом к массиву его друзей.

//Какое значение лежит тут: friends[students[0].id][3]?*!/ // undefined
//6____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо ххх, чтобы функция работала?
*!/
/!*type StudentType = {

    id: number

    name: string

}


type FriendsType = {

    [key: string]: Array<string>

}


export const students: Array<StudentType> = [

    {id: 1, name: "Bob"},

    {id: 2, name: "Alex"},

    {id: 3, name: "Ann"},

    {id: 4, name: "Charley"},

]


export const friends: FriendsType = {

    1: ["Oliver", "Jack", "Oscar",],

    2: ["Jack", "Lewis", "Thomas",],

    3: ["William", "Michael", "Lewis",],

    4: ["Oscar", "James", "William",],

}


const getMutualFriends = (st_1: StudentType, st_2: StudentType,) => {

    const result: Array<string> = []

    friends[st_1.id].forEach(f => friends[st_2.id].includes(f)? result.push(f): null)

    return result

}


//Дан массив студентов и структура,

//которая содержит список друзей каждого из студентов.

// Так же дана функция  getMutualFriends, проверяющая наличие общих друзей

// у двух выбранных студентов.

//Функция принимает параметром два объекта типа StudentType

// и возвращает массив с именами общих друзей,

//если они есть и пустой массив, если таковых нету.

// Что надо написать вместо ххх, чтобы функция работала?*!/ // st_2.id
//7____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо ххх, чтобы функция работала корректно?
*!/
/!*import React, {useState} from "react";


type UserType = {

    id: number

    name: string

    status: "online" | "offline"

}


type AddressType = {

    country: string

    city: string

    email: string

}


type AdressesType = {

    [userID: string]: AddressType

}


const users: Array<UserType> = [

    {id: 1, name: "Bob", status: "online"},

    {id: 2, name: "Alex", status: "offline"},

    {id: 3, name: "Ann", status: "offline"},

]


const addresses: AdressesType = {

    1: {country: "Russia", city: "Moscow", email: "hey@email.com"},

    2: {country: "Ukraine", city: "Kiev", email: "yo@send.ua"},

    3: {country: "Belarus", city: "Minsk", email: "wow@gogo.ru"},


}


const updateUserAddress = (userID: number, key: string, newValue: string) => {

    return {...addresses,

        [userID]: {...addresses[userID], [key]: newValue}

    }

}

// Дан список пользователей и структура, хранящая адреса пользователей.

// Так же дана функция updateUserAddress,

// которая обновляет указанное в параметрах поле в адресе пользователя.

// Пример использования функции: updateUserAddress(2, "city", "Dnepropetrovsk")

// Что надо написать вместо ххх, чтобы функция работала корректно?*!/ // userID
//8____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо XXX, что бы переменная result содержала значение 5?
*!/
/!*type ActionType = {

    type: "SUM"|"SUB"|"MULT"|"DIV"

    payload: number

}


export const calculator = (state: number, action: ActionType): number => {

    switch (action.type) {

        case "SUM":

            return state + action.payload

        case "SUB":

            return state - action.payload

        case "DIV":

            return state / action.payload

        case "MULT":

            return state * action.payload

        default:

            return state

    }

}


const result = calculator(10, {type: 'SUB', payload: 5})

console.log(result)

//Что надо написать вместо XXX, что бы переменная result содержала значение 5?*!/ // type: 'SUB'
//9____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?
*!/
/!*type ActionType = {

    type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"

    payload: number

}


export const calculator = (state: number, action: ActionType): number => {

    switch (action.type) {

        case "SUM":

            return state + action.payload

        case "SUB":

            return state - action.payload

        case "DIV":

            return state / action.payload

        case "MULT":

            return state * action.payload

        case "EXP":

            return state ** action.payload

        default:

            return state

    }

}

const result = calculator(10, {type:'EXP', payload: 0})

if (!(result - 1)){

    console.log("IT-INCUBATOR")

}


//Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"? // type:'EXP'*!/
//10___________________________________________________________________________________________________________________
/!*Вопрос:

    Какой код должен быть написан вместо XXX и YYY в типе ChangeUserPasswordTypeAT, что бы редьюсер работал?

    В ответе напишите через пробел: XXX YYY.*!/
/!*type UserType = {

    id: number

    userName: string

    email: string

    password: string

}


type ChangeUserPasswordTypeAT = {

    type: "CHANGE-USER-PASSWORD"

    payload: {

        id: number

        newPassword: string

    }

}


export const userReducer =

    (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {

        switch (action.type) {

            case "CHANGE-USER-PASSWORD":

                return state.map(u =>

                    u.id === action.payload.id

                        ? {...u, password: action.payload.newPassword}

                        : u)

            default:

                return state

        }

    }


//Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?

//В ответе напишите через пробел: XXX  YYY*!/ // id: number newPassword: string
*/ // TOTAL
