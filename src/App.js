import { useState } from 'react';
import './App.css';
import { InputTodoText } from "./components/InputTodoText"
import { Notimplemented } from "./components/Notimplemented"
import { Completion } from "./components/Completion"

function App() {

  //input TextのuseState
  const [todoText, setTodoText] = useState("")

  //未着手のuseState
  const [notimplemented, setNotimplemented ] = useState([]);

  //完了のusestate
  const [completion, setCompletion] = useState([]);

  //input Textに値を入力した際の関数
  const onChangeText =(event) =>{
    return setTodoText(event.target.value)
  }

  //input Textを入力し、追加ボタンを押下した際未着手Listに追加する関数
  const onClickAdd = () =>{
    if(todoText === "") return
    const newList = [...notimplemented,todoText];
    setNotimplemented(newList);
    setTodoText("")
  }

  //削除ボタンを押下した際、Listから消去する関数
  const onClickDelete = (index) =>{
    const newTodo = [...notimplemented]
    newTodo.splice(index,1)
    setNotimplemented(newTodo)

  }

  //完了ボタンを押下した際、完了Listに追加する関数
  const onClickCompletion = (index) =>{
    const newTodo =[...notimplemented]
    newTodo.splice(index,1)
    
    const newCompletion = [...completion,notimplemented[index]];
    setNotimplemented(newTodo)
    setCompletion(newCompletion)

  }

  //削除ボタンを押下した際、完了Listから消去する関数

  const onClickCompletionDelete = (index) =>{
    const newTodo = [...completion]
    newTodo.splice(index,1)
    setCompletion(newTodo)
  }

  return (
    <>

    <InputTodoText todoText={todoText} onChange={onChangeText} onClick={onClickAdd} />

    <Notimplemented notimplemented={notimplemented} onClick={onClickCompletion} clickDelete={onClickDelete} />

    <Completion completion={completion} completionDelete={onClickCompletionDelete} />
    
    </>
  );
}

export default App;
