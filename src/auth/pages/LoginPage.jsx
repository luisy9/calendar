import './styles.css';

export const LoginPage = () => {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-6 login-form-1">
          <h3>Iniciar Session</h3>
          <form>
            <div className="form-group">
              <input type="email" placeholder="Correo" className="form-control" />
            </div>
            <div className="form-group mb-2">
              <input type="password" placeholder="password" className="form-control" />
            </div>
            <div className="d-grid mb-2">
              <input type="submit" className="btnSubmit" value="Inciar Sesion" />
            </div>
          </form>
        </div>
        <div className="col-6 login-form-2">
          <h3>Registarse</h3>
          <form>
            <div className="form-group mb-2">
              <input type="text" placeholder="Nombre Completo" className="form-control" />
            </div>
            <div className="form-group mb-2">
              <input type="emial" placeholder="email" className="form-control" />
            </div>
            <div className="form-group mb-2">
              <input type="password" placeholder="contraseña" className="form-control" />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
              />
            </div>
            <div className="d-grid mb-2">
              <input type="submit" className="btnSubmit" value="Crear Cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
