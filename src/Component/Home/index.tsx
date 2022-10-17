import { useQuery } from 'react-query';
import { fetchingUsers } from '../../api/method/user';
import Test from './test';

function Home() {
  const { data, error, isError, isLoading } = useQuery(['users'], fetchingUsers)
  console.log('====================================');
  console.log(1111, data);
  console.log('====================================');
  if (isLoading) {
    return <span>Đang tải...</span>
  }

  if (isError) {
    return <span>Have an errors:</span>
  }

  return (
    <>
      <div>
        {data &&
          data.map((item: any, index: number) => {
            return (
              <p key={index}>{item.email}</p>
            )
          })
        }
      </div>
      <Test/>    
    </>

  )
}

export default Home