import React from 'react'
import { useMutation } from 'react-query';
import { deleteUsers } from '../../api/method/user';

function Test() {
  const [title, setTitle] = React.useState('')
  const {isLoading, isError, error, mutate} = useMutation(deleteUsers)
  return (
    <button
    onClick={() => {
      mutate(1)
    }}
  >Xóa</button>
  )
}

export default Test