import React, {useState} from 'react'
import swal from 'sweetalert'

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('')
  const [isEmpty,setIsEmpty] = useState(false);
  const [isUserEmpty, setIsUserEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false)
  const doLogin = ()=>{
    setIsUserEmpty(userName ==='');
      setIsPasswordEmpty(password === '');
    
    if(userName === '' || password === ''){
      setIsEmpty(true);
      return
    }
    else
      setIsEmpty(false);
    console.log(userName, password);
    fetch('http://localhost:9090/v1/dev/user/dologin', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'userName': userName,
        'password': password
      })
    }).then(data=>data.json()).then(res=>swal(res.message));
  }

  return (
    <div className="container">
        <div className="row mt-4">
            <div className="col-3"></div>
            <div className="col-6">
              {
                isEmpty
                ?
              <div className="alert alert-warning" role='alert'>
                              <h4 className='alert-heading' >Uyarı</h4>
                              <hr/>
                              <p>Burası boş geçilemez</p>
                            </div>
                            :
                            null
              }
              
              {isUserEmpty
              ?
              <div className="mb-3">
                <label className="form-label" style={{color: 'red'}}>
                  Kullanıcı Adı
                </label>
                <input style={{borderColor: 'red'}} onChange={evt=>{setUserName(evt.target.value)}}  type="text"  className="form-control"/>
              </div>
              :
              <div className="mb-3">
                <label className="form-label">
                  Kullanıcı Adı
                </label>
                <input onChange={evt=>{setUserName(evt.target.value)}} type="text" className="form-control" />
              </div>
              }
              {isPasswordEmpty
                ?
                <div className="mb-3">
                <label style={{color: 'red'}} className="form-label">
                  Şifre
                </label>
                <input style={{borderColor: 'red'}} onChange={evt=>{setPassword(evt.target.value)}} type="password" className="form-control" />
              </div>
              :
              <div className="mb-3">
                <label className="form-label">
                  Şifre
                </label>
                <input onChange={evt=>{setPassword(evt.target.value)}} type="password" className="form-control" />
              </div>
              }
              <div className="mb-3">
                <button onClick={doLogin} className="btn btn-success">Giriş</button>
              </div>
            </div>
            <div className="col-3"></div>
        </div>
    </div>
  )
}

export default Login