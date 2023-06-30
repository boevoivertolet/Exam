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

/*


/!*
//1_____________________________________________________________________________________________________________________
/!*export const Wrapper  = () => {

    return <user city="minsk" />

}

type PropsType = {

    city: string

}

export const user: React.FC<PropsType> = (props) => {

    return <div>hello</div>

}*!///-
//______________________________________________________________________________________________________________________






//2_____________________________________________________________________________________________________________________
/!*!/!*Ч/!*то нужно написать вместо ххх, что бы на экране
увидеть:

    😀
Заголовок
видео

📼 Контент
видео

📊 Статистика
лайков
*!/!*!/
import ReactDOM from 'react-dom'


export const YoutubeVideo = () => {

    return <div>

        <VideoHeader/>

        <VideoContent/>

        <VideoStatistics/>

    </div>

}

export const VideoHeader = () => {

    return <div>

        😀 Заголовок видео

    </div>

}

export const VideoContent = () => {

    return <div>

        📼 Контент видео

    </div>

}

export const VideoStatistics = () => {

    return <div>

        📊 Статистика лайков

    </div>

}


ReactDOM.render(<div>
        <VideoHeader/>
        <VideoContent/>
        <VideoStatistics/>
    </div>,

    document.getElementById('root')
);


//Что нужно написать вместо ххх, чтобы на экране увидеть:

//😀 Заголовок видео

//📼 Контент видео

//📊 Статистика лайков*!///+
//______________________________________________________________________________________________________________________






//3_____________________________________________________________________________________________________________________
/!*!/!*
Вопрос:

    Что нужно написать вместо ххх, что бы код работал?
    copy
*!/

    type UserPropsType = {

    name: string

    description: string

}

export const User: React.FC<UserPropsType> = (props) => {

    return <div>

        <h1>Имя: {props.name}</h1>

        //<div>Описание: {props.description}</div>

    </div>

}


//Что нужно написать вместо ххх, что бы код работал?*!///-
//______________________________________________________________________________________________________________________






//4_____________________________________________________________________________________________________________________
/!*!/!*Вопрос:

    Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки
copy*!/

type PropsType = {

    city: string

    country: string

    coords?: string

}

// 'belarus', 'minsk', '53.917501,27.604851'

export const Wrapper1 = (props:PropsType) => {

    return <PropsComponent1 city={'minsk'} country={'belarus'}/>

}


export const PropsComponent1: React.FC<PropsType> = (props) => {

    return <div>hello</div>

}*!///+
//______________________________________________________________________________________________________________________






//5_____________________________________________________________________________________________________________________
/!*Вопрос:

    Что нужно написать вместо xxx и yyy? Ответ дайте через пробел, например:
blabla onClick(props)
copy

type PagePropsType = {

    age: number

    name: string

    avatarUrl: string

}

const Page: React.FC<PagePropsType> = (props) => {

    return <User a={22} n={'asd'} />

}

type UserPropsType = {

    a: number

    n: string

}

export const User: React.FC<UserPropsType> = (props) => {

    return <div>name: {props.n}, age: {props.a}</div>

}*!///+-
//______________________________________________________________________________________________________________________






//6_____________________________________________________________________________________________________________________
/!*
/!*Вопрос:

    Что нужно написать вместо XXX и YYY? Ответ дайте через пробел, например:
car user
copy*!/

type NewsType = {

    title: string

    author: string

}

type ArticleType = {

    title: string

    date: string

    text: string

}

type PagePropsType = {

    news: NewsType[]

    mainArticle: ArticleType

}

export const Page: React.FC<PagePropsType> = (props) => {

    return <div>

        <article>

            <h1>Название: {props.mainArticle.title}</h1>

            <div>{props.mainArticle.date}</div>

            <div>{props.mainArticle.text}</div>

        </article>

        <aside>Articles:

            <ul>

                {props.news.map(n => <li>{n.title}, {n.author}</li>)}

            </ul>

        </aside>

    </div>

}
*!///+-
//______________________________________________________________________________________________________________________






//7_____________________________________________________________________________________________________________________
/!*!/!*
Вопрос:

    Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?

    Ответ дайте через пробел, например: props.x wallets
copy
*!/

type UserWalletType = {

    title: string

    amount: number

}

type UserWalletPropsType = {

    wallet: UserWalletType

}


export const UserWallet: React.FC<UserWalletPropsType> = (props) => {

    return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>

}


export const UserMoney = () => {

    const wallets = [

        {title: 'bitcoin', amount: 1},

        {title: '$', amount: 100}

    ]


    return <div>

        <UserWallet wallet={wallets[0]}/>

        <UserWallet wallet={wallets[1]}/>

    </div>

}*!///+-
//______________________________________________________________________________________________________________________






//8_____________________________________________________________________________________________________________________
/!*
/!*
Вопрос:

    Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?

    Ответ дайте через пробел, пример: a={12} ccc={video.id} d={'hello'}
copy
*!/

import ReactDOM from 'react-dom'


export const VideoHeader = (props: {videoName: string}) => {

    return <div>

        😀 {props.videoName}

    </div>

}

export const VideoContent = (props: {videoContent: string}) => {

    return <div>

        📼 <a href={props.videoContent}>{props.videoContent}</a>

    </div>

}

export const VideoDescription = (props: {videoDescription: string}) => {

    return <div>

        📑 {props.videoDescription}

    </div>

}


export const YoutubeVideo = (props: any) => {

    return <div>

        <VideoHeader videoName={'Samurai way'} />

        <VideoContent videoContent={'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8'} />

        <VideoDescription videoDescription={'Best free react-course'} />

    </div>

}


export const App = () => {

    const video = {

        title: 'Samurai way',

        link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',

        description: 'Best free react-course'

    }


    return <YoutubeVideo video={video} />

}


ReactDOM.render(<App />,

    document.getElementById('root')

);
*!///+
//______________________________________________________________________________________________________________________






//9_____________________________________________________________________________________________________________________
/!*
/!*Вопрос:

    Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел
copy*!/

import ReactDOM from 'react-dom'


const CrazyButton = (props: any) => {


    const style = {

        color: props.fontColor,

        backgroundColor: props.bgColor

    }


    return <button style={style}>

        {props.title}

    </button>

}


export const App = () => {

    return <div>

        <CrazyButton title={'delete'} fontColor={'white'} bgColor={'red'}/>

        <CrazyButton title={'add'} fontColor={'white'} bgColor={'green'}/>


    </div>

}


ReactDOM.render(<App/>,

    document.getElementById('root')

)
*!///+-
//______________________________________________________________________________________________________________________






//10____________________________________________________________________________________________________________________
/!*
/!*Вопрос:

    Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел
copy*!/

import ReactDOM from 'react-dom'


const Son = (props: any) => {

    return <div>

        I am son. My name is {props.name}

    </div>

}



const Father = (props: any) => {

    return <div>

        I am father. My name is {props.name}

        <Son name={props.sonName} />

    </div>

}


const Granny = (props: any) => {

    return <div>

        I am granny. My name is {props.name}

        <Father name={props.fatherName} sonName={props.sonName} />

    </div>

}


export const App = () => {

    return <div>

        <Granny name ={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>

    </div>

}


ReactDOM.render(<App/>,

    document.getElementById('root')

)
*!///+
//______________________________________________________________________________________________________________________*!/// 1 неделя

/!*
//1_____________________________________________________________________________________________________________________
Вопрос:

Какой тип правильнее указать вместо "any" при типизации стэйта?
copy
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const results = useState<any>(["Bob", "Alex", "Ann"])

    const users = results[0]

    const setUsers = results[1]


    return (

       <p>Тут будет список пользователей</p>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);


// Какой тип правильнее указать вместо "any" при типизации стэйта? //Array<string>

//______________________________________________________________________________________________________________________

//2_____________________________________________________________________________________________________________________
Вопрос:

Что вернёт выражение: typeof useState?
copy
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])


    return (

       <p>Тут будет список пользователей!</p>

    )

}


ReactDOM.render(

    <UsersList />, document.getElementById('root')

);


// Что вернёт выражение: typeof useState? // Object

//______________________________________________________________________________________________________________________

//3_____________________________________________________________________________________________________________________
Вопрос:

Чему равно results.length?
copy
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const results = useState<Array<string>>(["Bob", "Alex", "Ann"])
    console.log(results.length)

    const users = results[0]

    const setUsers = results[1]


    return (

       <p>Тут будет список пользователей</p>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);


// Чему равно results.length? // 3

//______________________________________________________________________________________________________________________

//4_____________________________________________________________________________________________________________________
+Вопрос:

Что вернёт выражение: Array.isArray(users)?
copy
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])


    return (

       <p>Тут будет список пользователей</p>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что вернёт выражение: Array.isArray(users)? // true

//______________________________________________________________________________________________________________________

//5_____________________________________________________________________________________________________________________
-Вопрос:

Что вернёт выражение: typeof setUsers?
copy
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    return (

       <p>Тут будет список пользователей</p>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что вернёт выражение: typeof setUsers? // function

//______________________________________________________________________________________________________________________

//6_____________________________________________________________________________________________________________________
Вопрос:

Что надо вставить вместо ХХХ, чтобы код заработал?
copy
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])


    return (

        <main>

            <h4>User list:</h4>

            <ul>

                 { users.ХХХ(user => <li>{user}</li> )}// map

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо вставить вместо ХХХ, чтобы код заработал? // map

//______________________________________________________________________________________________________________________

//7_____________________________________________________________________________________________________________________
Вопрос:

Что надо вставить вместо XXX, чтобы код заработал?
copy

import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    const getUser = (user: string) => <li>{user}</li>

    const usersList = users.map(XXX)


    return (

        <main>

            <h4>User list:</h4>

            <ul>

                {usersList}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо вставить вместо XXX, чтобы код заработал? // getUser

//______________________________________________________________________________________________________________________

//8_____________________________________________________________________________________________________________________
Вопрос:

Что вернёт выражение: Array.isArray(usersList)?
copy
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    const getUser = (user: string) => <li>{user}</li>

    const usersList = users.map(getUser)


    return (

        <main>

            <h4>User list:</h4>

            <ul>

                {usersList}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что вернёт выражение: Array.isArray(usersList)? //true

//______________________________________________________________________________________________________________________

//9_____________________________________________________________________________________________________________________
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    const getUser = (user: string) => <li>{user}</li>





    return (

        <main>

            <h4>User list:</h4>

            <ul>

                {users.map(getUser)}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что вернёт выражение: typeof getUser?  // function

//______________________________________________________________________________________________________________________

//10____________________________________________________________________________________________________________________
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


function User(props: UserType) {

    return (

        <li>User {props.name}: {props.age} y.o.</li>

    )

}


function UsersList() {

    const state = [

        {id: 1, name: "Bob", age: 34},

        {id: 2, name: "Alex", age: 25},

        {id: 3, name: "Ann", age: 30},

        {id: 4, name: "John", age: 23},

    ]

    const users = [

        {id: 1, userName: "Bob", age: 34},

        {id: 2, userName: "Alex", age: 25},

        {id: 3, userName: "Ann", age: 30},

        {id: 4, userName: "John", age: 23},

    ]



    const [usersList, setUsersList] = useState<Array<UserType>>(state)

    return (

        <main>

            <h5>User list:</h5>

            <p>Тут будет список пользователей</p>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо написать вместо XXX, чтобы код работал? //state

//______________________________________________________________________________________________________________________
*!/// 2 неделя

/!*

//1_____________________________________________________________________________________________________________________
Вопрос:

    Что надо написать вместо xxx, чтобы код работал оптимальней?

import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


function User(props: UserType) {

    return (

        <li>Student {props.name}: {props.age} y.o.</li>

    )

}


function UsersList() {

    const data: Array<UserType> = [

        {id: 1, name: "Bob", age: 34},

        {id: 2, name: "Alex", age: 29},

        {id: 3, name: "Ann", age: 25},

        {id: 4, name: "John", age: 36},

    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    return (

        <main>

            <h4>User list:</h4>

            <ul>

                {

                    users.map(u => <User xxx={u.id}

                                         id={u.id}

                                         name={u.name}

                                         age={u.age}

                        />

                    )

                }

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо написать вместо xxx, чтобы код работал оптимально?

//2_____________________________________________________________________________________________________________________
Вопрос:

    Что надо написать вместо xxx, чтобы код работал?

import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


function User(props: UserType) {

    return (

        <li>Student {props.name}: {props.age} y.o.</li>

    )

}


function UsersList() {

    const data: Array<UserType> = [

        {id: 1, name: "Bob", age: 34},

        {id: 2, name: "Alex", age: 29},

        {id: 3, name: "Ann", age: 25},

        {id: 4, name: "John", age: 36},

    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    return (

        <main>

            <h4>User list:</h4>

            <ul>

                {/!*{ users.map(u => <User key={u.id} {...xxx} />) }*!/}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо написать вместо xxx, чтобы код работал?


//3_____________________________________________________________________________________________________________________
Вопрос:

    Что надо написать вместо xxx, чтобы код работал?

import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


function User(props: UserType) {

    return (

        <li>User {props.name}: {props.age} y.o.</li>

    )

}


function UsersList() {

    const data: Array<UserType> = [

        {id: 1, name: "Bob", age: 25},

        {id: 2, name: "Alex", age: 28},

        {id: 3, name: "Ann", age: 23},

        {id: 4, name: "John", age: 30},

    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    // Пользователи старше 25 лет:

    // const olderThen25Users = users.xxx(u => u.age > 25)

    return (

        <main>

            <h4>User list:</h4>

            <ul>

                {/!*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*!/}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо написать вместо xxx, чтобы код работал? // filter?


//4_____________________________________________________________________________________________________________________
Вопрос:

    Что надо написать вместо xxx, чтобы код работал?

import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


function User(props: UserType) {

    return (

        <li>User {props.name}: {props.age} y.o.</li>

    )

}


function UsersList() {

    const data: Array<UserType> = [

        {id: 1, name: "Bob", age: 25},

        {id: 2, name: "Alex", age: 28},

        {id: 3, name: "Ann", age: 23},

        {id: 4, name: "John", age: 30},

    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    // Необходимо отрендерить список пользователей старше 25 лет:

     const getOlderThen25Users = (u: xxx) => u.age > 25

     const olderThen25Users = users.filter(getOlderThen25Users)

    return (

        <main>

            <h4>User list:</h4>

            <ul>

                {/!*{ olderThen25Users.map(u => <User key={u.id} {...u}/>)}*!/}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);


// Что надо написать вместо xxx, чтобы код работал?


//5_____________________________________________________________________________________________________________________
Вопрос:

    Что вернёт выражение: Array.isArray(olderThen25Users)?

import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


function User(props: UserType) {

    return (

        <li>User {props.name}: {props.age} y.o.</li>

    )

}


function UsersList() {

    const data: Array<UserType> = [

        {id: 1, name: "Bob", age: 25},

        {id: 2, name: "Alex", age: 28},

        {id: 3, name: "Ann", age: 23},

        {id: 4, name: "John", age: 30},

    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    // Необходимо отрендерить список ользователей старше 25 лет:

    const getOlderThen25Users = (u: UserType) => u.age > 25

    const olderThen25Users = users.filter(getOlderThen25Users)

    return (

        <main>

            <h4>User list:</h4>

            <ul>

                { olderThen25Users.map(u => <User key={u.id} {...u}/>)}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что вернёт выражение: Array.isArray(olderThen25Users)


//6_____________________________________________________________________________________________________________________
Вопрос:

    Что надо написать вместо xxx, чтобы код работал?

import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


type UserPropsType = UserType & {

    deleteUser: (id: number) => void

}


function User(props: UserPropsType) {

    const deleteUser = () => props.deleteUser(props.id)

    return (

        <li>

            <button onClick={deleteUser}>x</button>

            User {props.name}: {props.age} y.o.

        </li>

    )

}


function UsersList() {

    const data: Array<UserType> = [

        {id: 1, name: "Bob", age: 25},

        {id: 2, name: "Alex", age: 28},

        {id: 3, name: "Ann", age: 23},

        {id: 4, name: "John", age: 30},

    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    const deleteUser = (userID: number) => {

        const filteredUsers = users.filter(u => u.id !== userID)

        // setUsers(xxx)

    }

    return (

        <main>

            <h4>User list:</h4>

            <ul>

                {users.map(u => <User

                    key={u.id}

                    {...u}

                    deleteUser={deleteUser}

                />)}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо написать вместо xxx, чтобы код работал?


//7_____________________________________________________________________________________________________________________
Вопрос:

    Что надо написать вместо ххх, что бы при клике по кнопке на странице появился пустая всплывашка alert?

import React from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function Button() {

    return <button

        // onClick={xxx}

    >Click</button>

}



ReactDOM.render(

    <Button/>, document.getElementById('root')

);






// Что надо написать вместо ххх,

// что бы на странице появился пустой alert при клике по кнопке?


//8_____________________________________________________________________________________________________________________
Вопрос:

    Какой тип данных представляет аргумент функции-обработчика?

    Что надо написать вместо ххх, что бы в консоль вывело true?

import React, {MouseEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function Button() {

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {

        // console.log((typeof e) === ххх)

    }

    return <button onClick={onClickHandler} >Click</button>

}



ReactDOM.render(

    <Button/>, document.getElementById('root')

);


// Какой тип данных представляет аргумент функции-обработчика?

// Что надо написать вместо ххх, что бы в консоль вывело true?


//9_____________________________________________________________________________________________________________________
Вопрос:

    Что надо написать вместо ххх, что бы на странице появился текст "BUTTON"?

import React, {useState, MouseEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function Button() {

    const [tagName, setTagName] = useState<string>()

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {

        // setTagName(e.xxx.tagName)

    }

    return (

        <>

            <p>{tagName}</p>

            <button onClick={onClickHandler} >

                <span>Click</span>

            </button>

        </>

    )

}


ReactDOM.render(

    <Button/>, document.getElementById('root')

);


// Что надо написать вместо ххх, что бы на странице появился текст BUTTON?




//10____________________________________________________________________________________________________________________
Вопрос:

    В типе UserPropsType у фунуции deleteUser в параметрах указан тип "any".

    Какой тип было бы указать правильнее?

import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


type UserPropsType = UserType & {

    deleteUser: (id: any) => void

}


function User(props: UserPropsType) {

    return (

        <li>

            <button onClick={()=>props.deleteUser(props.id)}>x</button>

            User {props.name}: {props.age} y.o.

        </li>

    )

}


function UsersList() {

    const data: Array<UserType> = [

        {id: 1, name: "Bob", age: 25},

        {id: 2, name: "Alex", age: 28},

        {id: 3, name: "Ann", age: 23},

        {id: 4, name: "John", age: 30},

    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    const deleteUser = (userID: number) => {

        setUsers(users.filter(u => u.id !== userID))

    }

    return (

        <main>

            <h4>Users list:</h4>

            <ul>

                {users.map(u => <User

                    key={u.id}

                    {...u}

                    deleteUser={deleteUser}

                />)}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// В типе UserPropsType у функции deleteUser в параметрах указан тип "any".

// Какой тип было бы указать правильнее?
*!/// 3 неделя

/!*
//1___________________________________________________________________________________________
/!*Вопрос:

    Что надо написать вместо xxx, чтобы код работал?*!/

/!*
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


type UserPropsType = UserType & {

    deleteUser: (id: number) => void

}


function User(props: UserPropsType) {

    return (

        <li>

            <button onClick={() => props.deleteUser(props.id)}>x</button>

            User {props.name}: {props.age} y.o.

        </li>

    )

}


function UsersList() {

    const data: Array<UserType> = [

        {id: 1, name: "Bob", age: 25},

        {id: 2, name: "Alex", age: 28},

        {id: 3, name: "Ann", age: 23},

        {id: 4, name: "John", age: 30},

    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    const deleteUser = (userID: number) => {

        const filteredUsers = users.filter(u => u.id !== userID)

        setUsers(filteredUsers)

    }

    return (

        <main>

            <h4>User list:</h4>

            <ul>

                {users.map(u => <User

                    key={u.id}

                    {...u}

                    deleteUser={deleteUser}

                />)}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо написать вместо xxx, чтобы код работал?
*!/ //props.id


//2___________________________________________________________________________________________
/!*Вопрос:

    Что надо написать вместо xxx, чтобы код работал?*!/

/!*
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


type UserPropsType = UserType & {

    deleteUser: (id: number) => void

}


function User(props: UserPropsType) {

    const deleteUser = () => props.deleteUser(props.id)

    return (

        <li>

            <button onClick={deleteUser}>Delete</button>

            User {props.name}: {props.age} y.o.

        </li>

    )

}


function UsersList() {

    const data: Array<UserType> = [

        {id: 1, name: "Bob", age: 25},

        {id: 2, name: "Alex", age: 28},

        {id: 3, name: "Ann", age: 23},

        {id: 4, name: "John", age: 30},

    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    const deleteUser = (userID: number) => {

        const updatedUsers = users.filter(u => u.id !== userID)

        setUsers(updatedUsers)

    }

    return (

        <main>

            <h4>User list:</h4>

            <ul>

                {users.map(u => <User

                    key={u.id}

                    {...u}

                    deleteUser={deleteUser}

                />)}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);


// Что надо написать вместо xxx, чтобы код работал?
*!/ //deleteUser


//3___________________________________________________________________________________________
/!*Вопрос:

    Что надо написать вместо ххх, чтобы Вас не направило на страницу Youtube при клике по ссылкe?*!/

/!*
import React, {useState, MouseEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function Post() {

    const onClickHandler = (e: MouseEvent<HTMLAnchorElement>) => {

        e.preventDefault();

        alert("Летим-бомбим!!!")

    }

    return (

        <div>

            <article>

                <h4>Как дела, братан?</h4>

                <p>

                    Вижу, что неплохо. Давай, трудись )))

                    Google ждёт тебя в цифровом рабстве!

                    Cтавь лайк и полетели!!!

                </p>

                <a href={"https://www.youtube.com/"}

                   onClick={onClickHandler}

                >В этом месте подробнее...</a>

            </article>

        </div>

    )

}


ReactDOM.render(

    <Post/>, document.getElementById('root')

);

// Что надо написать вместо ххх, чтобы Вас не направило на страницу Youtube

// при клике по ссылке?
*!/ //e.preventDefault(); ????????????????????????????????????????????????????????????????


//4___________________________________________________________________________________________
/!*Вопрос:

    Что надо написать вместо ххх, чтобы данные из формы не отправлялись на сервер и страница не перезагружалась при клике по кнопке?*!/

/!*
import React, {useState, MouseEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function AuthForm() {

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {

        e.preventDefault();

        alert()

    }

    return (

        <form>

            <div>

                <label style={{padding: "10px 0"}}>

                    Name:

                    <input type={"email"} name={"email"}/>

                </label>

            </div>

            <div>

                <label style={{padding: "10px 0"}}>

                    Password:

                    <input type={"password"} name={"password"}/>

                </label>

            </div>

            <button

                onClick={onClickHandler}

                type={"submit"}>

                Log in

            </button>

        </form>

    )

}


ReactDOM.render(

    <AuthForm/>, document.getElementById('root')

);

// Что надо написать вместо ххх, чтобы данные из формы

// не отправлялись на сервер и страница не перезагружалась

// при клике по кнопке?

*!/ //e.preventDefault(); ????????????????????????????????????????????????????????????????

//5___________________________________________________________________________________________
/!*Вопрос:

    Что надо написать вместо ххх, чтобы правильно типизировать параметр функции?*!/

/!*
import React, {useState, MouseEvent, ChangeEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function User() {

    const [userName, setUserName] = useState<string>("")

     const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)

    return (

        <div>

            <p>{userName}</p>

            <input

                 onChange={onChangeHandler}

            />

        </div>

    )

}


ReactDOM.render(

    <User/>, document.getElementById('root')

);

// Что надо написать вместо ххх, чтобы правильно типизировать

// параметр функции?
*!/ //ChangeEvent<HTMLInputElement>



//6___________________________________________________________________________________________
/!*Вопрос:

    Что надо написать вместо ххх, чтобы инпут был контролируемым?*!/

/!*
import React, {useState, MouseEvent, ChangeEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function User() {

    const [userName, setUserName] = useState<string>("")

    return (

        <div>

            <p>{userName}</p>

            <input

                value={userName}

                onChange={(e) => setUserName(e.currentTarget.value)}

            />

        </div>

    )

}


ReactDOM.render(

    <User/>, document.getElementById('root')

);

// Что надо написать вместо ххх, чтобы инпут был контролируемым?
*!/ //value={userName} ???????????????????????????????????????????????????????????????????



//7___________________________________________________________________________________________
/!*Вопрос:

    Что надо написать вместо ххх, чтобы после вывода текста в параграф содержимое формы ввода очищалось?*!/

/!*
import React, {useState, MouseEvent, ChangeEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function User() {

    const [userName, setUserName] = useState<string>("")

    const [text, setText] = useState<string>("")

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement> )=> setUserName(e.currentTarget.value)

    return (

        <div>

            <input

                value={userName}

                onChange={onChangeHandler}

                onBlur={()=> {

                    // xxx

                    setText(userName)

                }}

            />

            <p>{text}</p>

        </div>

    )

}


ReactDOM.render(

    <User/>, document.getElementById('root')

);

// Что надо написать вместо ххх,

// чтобы после вывода текста в параграф содержимое формы ввода очищалось?

*!/ //setUserName('')


//8___________________________________________________________________________________________
/!*Вопрос:

    Что надо написать вместо ххх, чтобы при потере инпутом фокуса добавлялась заметка?*!/

/!*
import React, {useState, MouseEvent, ChangeEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function Notes() {

    const [newNote, setNewNote] = useState<string>("")

    const [notes, setNotes] = useState<Array<string>>([])

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>

        setNewNote(e.currentTarget.value)

    const addNote = () => {

        setNotes([newNote, ...notes])

        setNewNote("")

    }

    return (

        <div>

            <textarea

                value={newNote}

                onChange={onChangeHandler}

                // xxx = {addNote}

            />

            <h4>Notes:</h4>

            <div>

                {notes.map((n,i )=> <p key={i}>{n}</p>)}

            </div>

        </div>

    )

}



ReactDOM.render(

    <Notes/>, document.getElementById('root')

);

// Что надо написать вместо ххх,

// чтобы при потере инпутом фокуса добавлялась заметка?
*!/ // onBlur



//9___________________________________________________________________________________________
/!*Вопрос:

    Что надо написать вместо ххх, чтобы при клике список заметок очищался?*!/

/!*
import React, {useState, MouseEvent, ChangeEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function Notes() {

    const [newNote, setNewNote] = useState<string>("")

    const [notes, setNotes] = useState<Array<string>>([])

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>

        setNewNote(e.currentTarget.value)

    const addNote = () => {

        setNotes([newNote, ...notes])

        setNewNote("")

    }

    return (

        <div>

            <textarea

                value={newNote}

                onChange={onChangeHandler}

                onBlur={addNote}

            />

            <div>

                <button

                    // onClick={xxx}


                >Clear notes list</button>

            </div>

            <h4>Notes:</h4>

            <div>

                {notes.map(n => <p>{n}</p>)}

            </div>

        </div>

    )

}


ReactDOM.render(

    <Notes/>, document.getElementById('root')

);

// Что надо написать вместо ххх,

// чтобы при клике список заметок очищался?
*!/ //()=>{setNotes([])}






*!/// 4 неделя
*/ // 4 недели

/*
//1_____________________________________________________________________________________________________________________
/!*Вопрос:

    Что нужно написать вместо ххх, что бы код работал?*!/
/!*
    type UserPropsType = {

        name: string

        description: string

    }

export const User: React.FC<UserPropsType> = (props) => {

    return <div>

        <h1>Имя: {props.name}</h1>

        <div>Описание: {props.description}</div>

    </div>

}


//Что нужно написать вместо ххх, что бы код работал?
*!/

//2_____________________________________________________________________________________________________________________
/!*Вопрос:

    Что нужно написать вместо xxx и yyy? Ответ дайте через пробел, например:
blabla onClick(props)*!/

/!*type PagePropsType = {

    age: number

    name: string

    avatarUrl: string

}

const Page: React.FC<PagePropsType> = (props) => {

    return <User a={props.age} n={props.name} />

}

type UserPropsType = {

    a: number

    n: string

}

export const User: React.FC<UserPropsType> = (props) => {

    return <div>name: {props.n}, age: {props.a}</div>

}*!/
//3_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что нужно написать вместо xxx и yyy, чтобы компонент UserMoney отобразил информацию о двух кошельках (bitcoin и $)?

    Ответ дайте через пробел, например: props.x wallets
*!/

/!*type UserWalletType = {

    title: string

    amount: number

}

type UserWalletPropsType = {

    wallet: UserWalletType

}


export const UserWallet: React.FC<UserWalletPropsType> = (props) => {

    return <div>title: {props.wallet.title}, amount: {props.wallet.amount}</div>

}


export const UserMoney = () => {

    const wallets = [

        {title: 'bitcoin', amount: 1},

        {title: '$', amount: 100}

    ]


    return <div>

        <UserWallet wallet={wallets[0]} />

        <UserWallet wallet={wallets[1]} />

    </div>

}*!/

//4_____________________________________________________________________________________________________________________
/!*Вопрос:

    Что нужно написать вместо XXX YYY ZZZ? Ответ дайте через пробел*!/

/!*import ReactDOM from 'react-dom'


const Son = (props: any) => {

    return <div>

        I am son. My name is {props.name}

    </div>

}



const Father = (props: any) => {

    return <div>

        I am father. My name is {props.name}

        <Son name={props.sonName} />

    </div>

}


const Granny = (props: any) => {

    return <div>

        I am granny. My name is {props.name}

        <Father name={props.fatherName} sonName={props.sonName} />

    </div>

}


export const App = () => {

    return <div>

        <Granny name={'Бабуля'} fatherName={'Батя'} sonName={'Сын'}/>

    </div>

}


ReactDOM.render(<App/>,

    document.getElementById('root')

)*!/

//5_____________________________________________________________________________________________________________________
/!*Вопрос:

    Чему равно results.length?*!/

/!*
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const results = useState<Array<string>>(["Bob", "Alex", "Ann"])


    const users = results[0]

    const setUsers = results[1]


    return (

        <p>Тут будет список пользователей</p>

    )
    console.log(results.length)
}



ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);


// Чему равно results.length?

*!/

//6_____________________________________________________________________________________________________________________
/!*Вопрос:

    Что вернёт выражение: typeof setUsers?*!/

/!*
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function UsersList() {

    const [users, setUsers] = useState<Array<string>>(["Bob", "Alex", "Ann"])

    return (

        <p>Тут будет список пользователей</p>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что вернёт выражение: typeof setUsers?
*!/ //Object?



//7_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо XXX, чтобы код работал?
*!/

/!*
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


function User(props: UserType) {

    return (

        <li>User {props.name}: {props.age} y.o.</li>

    )

}


function UsersList() {

    const state = [

        {id: 1, name: "Bob", age: 34},

        {id: 2, name: "Alex", age: 25},

        {id: 3, name: "Ann", age: 30},

        {id: 4, name: "John", age: 23},

    ]

    const users = [

        {id: 1, userName: "Bob", age: 34},

        {id: 2, userName: "Alex", age: 25},

        {id: 3, userName: "Ann", age: 30},

        {id: 4, userName: "John", age: 23},

    ]



    const [usersList, setUsersList] = useState<Array<UserType>>(UsersList)

    return (

        <main>

            <h5>User list:</h5>

            <p>Тут будет список пользователей</p>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо написать вместо XXX, чтобы код работал?
*!/


//8_____________________________________________________________________________________________________________________
/!*Вопрос:

    Что надо написать вместо xxx, чтобы код работал?*!/

/!*import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


function User(props: UserType) {

    return (

        <li>User {props.name}: {props.age} y.o.</li>

    )

}


function UsersList() {

    const data: Array<UserType> = [

        {id: 1, name: "Bob", age: 25},

        {id: 2, name: "Alex", age: 28},

        {id: 3, name: "Ann", age: 23},

        {id: 4, name: "John", age: 30},

    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    // Пользователи старше 25 лет:

     const olderThen25Users = users.filter(u => u.age > 25)

    return (

        <main>

            <h4>User list:</h4>

            <ul>

                { olderThen25Users.map(u => <User key={u.id} {...u}/>)}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо написать вместо xxx, чтобы код работал?*!/


//9_____________________________________________________________________________________________________________________
/!*
Вопрос:

    Какой тип данных представляет аргумент функции-обработчика?

    Что надо написать вместо ххх, что бы в консоль вывело true?
*!/
/!*
import React, {MouseEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function Button() {

    const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {

         console.log((typeof e) === Object)

    }

    return <button onClick={onClickHandler} >Click</button>

}



ReactDOM.render(

    <Button/>, document.getElementById('root')

);


// Какой тип данных представляет аргумент функции-обработчика?

// Что надо написать вместо ххх, что бы в консоль вывело true?
*!/

//10____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо xxx, чтобы код работал?
*!/

/!*
import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


type UserType = {

    id: number

    name: string

    age: number

}


type UserPropsType = UserType & {

    deleteUser: (id: number) => void

}


function User(props: UserPropsType) {

    return (

        <li>

            <button onClick={() => props.deleteUser(props.id)}>x</button>

            User {props.name}: {props.age} y.o.

        </li>

    )

}


function UsersList() {

    const data: Array<UserType> = [

        {id: 1, name: "Bob", age: 25},

        {id: 2, name: "Alex", age: 28},

        {id: 3, name: "Ann", age: 23},

        {id: 4, name: "John", age: 30},

    ]

    const [users, setUsers] = useState<Array<UserType>>(data)

    const deleteUser = (userID: number) => {

        const filteredUsers = users.filter(u => u.id !== userID)

        setUsers(filteredUsers)

    }

    return (

        <main>

            <h4>User list:</h4>

            <ul>

                {users.map(u => <User

                    key={u.id}

                    {...u}

                    deleteUser={deleteUser}

                />)}

            </ul>

        </main>

    )

}


ReactDOM.render(

    <UsersList/>, document.getElementById('root')

);

// Что надо написать вместо xxx, чтобы код работал?

*!/

//11____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо ххх, чтобы инпут был контролируемым?
*!/

/!*
import React, {useState, MouseEvent, ChangeEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function User() {

    const [userName, setUserName] = useState<string>("")

    return (

        <div>

            <p>{userName}</p>

            <input

                value={userName}

                onChange={(e) => setUserName(e.currentTarget.value)}

            />

        </div>

    )

}


ReactDOM.render(

    <User/>, document.getElementById('root')

);

// Что надо написать вместо ххх, чтобы инпут был контролируемым?

*!/

//12____________________________________________________________________________________________________________________
/!*
Вопрос:

    Что надо написать вместо ххх, чтобы при клике список заметок очищался?
*!/

/!*
import React, {useState, MouseEvent, ChangeEvent} from 'react';

import ReactDOM from 'react-dom';

import './index.css';


function Notes() {

    const [newNote, setNewNote] = useState<string>("")

    const [notes, setNotes] = useState<Array<string>>([])

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement> )=>

        setNewNote(e.currentTarget.value)

    const addNote = () => {

        setNotes([newNote, ...notes])

        setNewNote("")

    }

    return (

        <div>

            <textarea

                value={newNote}

                onChange={onChangeHandler}

                onBlur={addNote}

            />

            <div>

                <button

                     onClick={()=>{setNotes([])}}

                >Clear notes list</button>

            </div>

            <h4>Notes:</h4>

            <div>

                {notes.map(n => <p>{n}</p>)}

            </div>

        </div>

    )

}


ReactDOM.render(

    <Notes/>, document.getElementById('root')

);

// Что надо написать вместо ххх,

// чтобы при клике список заметок очищался?

*!/
*/// Итоговый
