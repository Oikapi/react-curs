import React from 'react'
import {cn as bem} from "@bem-react/classname"
import "./style.css"
import { Link } from 'react-router-dom'

function CommentMiniForm(props) {
  const cn = bem("Mini-Comment")
  const onSubmit = (e) => {
    e.preventDefault();
      const form = e.target;
      const text  = form.text.value;
      const body  = {
        text : text,
        parent :{
          _id : props.item._id,
          _type : props.item._type
        },
      }

      props.addComment(body)
      props.onClose()
      form.text.value = ""
  }

  return (
    <>
    {props.isLogin ?
      <div className = {cn()} style={{...props.style}}>
         <form onSubmit={onSubmit} className={cn("form")}>
      <label htmlFor="replyInput"><b>Новый ответ</b></label>
      <br />
      <textarea
        name = "text"
        defaultValue={props.value}
        id="replyInput"
        // value={replyText}
        onChange={(event) => props.onChange(event.target.value)}
        />
      <br />
      <button type="submit">Отправить</button>
      <button type="button" onClick={props.onClose}>Отмена</button>
    </form>
    </div>
    : <p style={{...props.style}}><Link to="/login">Войдите</Link>, чтобы иметь возможность ответить. 
    <button className={cn("cancel-btn")} onClick={props.onClose}>Отмена</button></p>
      }
  </>
  )
}

export default CommentMiniForm