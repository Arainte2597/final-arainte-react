import { useState } from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const ContactPage = () => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Envio de nombre: ", value)
    }

    const handleChange = (e) => {
        console.log(e)
        setValue(e.target.value)
    }

    const resetForm = () => {
        setValue('')
        console.log("limpiar formulario")
    }

    return(
        <Container className='container-general help'> 

            <h2>Preguntas Frecuentes</h2>
            <div className='faq-section'>
                <section>
                    <h3>Consultas</h3>
                    <h4>¿Tienen tienda física?</h4>
                    <p>
                    No, nuestra actividad comercial se realiza a través de esta página web.
                    </p>
                    <h4>¿Son distribuidores?</h4>
                    <p>
                    Distribuimos en exclusividad para los mercados de Argentina algunas de las marcas presentes en Tienda Polaroid.
                    </p>
                </section>
                <section>
                    <h3>POLÍTICA DE PRIVACIDAD</h3>
                    <h4>Razón social</h4>
                    <p>Reflecta,S.A</p>
                    <h4>Finalidad</h4>
                    <p>Atender dudas o preguntas de usuarios</p>
                    <h4>Legitimación</h4>
                    <p>Consentimiento</p>
                    <h4>Destinatarios</h4>
                    <p>Tus datos no serán compartidos con ningún tercero (salvo aquellos proveedores de servicios con los que disponemos de un contrato de servicios vigente)</p>
                    <h4>Derechos</h4>
                    <p>Puedes acceder, rectificar o suprimir tus datos, así como ejercer los derechos que se mencionan en nuestra política de privacidad</p>
                </section>
                <section>
                    <h3>Contacto</h3>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='name' placeholder='Nombre' required="name"/>
                        <input type="text" name='apellido' placeholder='Apellido' required="apellido"/>
                        <input type="mail" name='mail' placeholder='mail'required="mail"/>

                        <div className="col-md-8  offset-md-3">
<span class="custom-checkbox">
  
  <span><input name="st_reg_terms_and_conditions" id="ff_st_reg_terms_and_conditions" type="checkbox" value="1" required=""></input><i className="fa fa-check rtl-no-flip checkbox-checked" aria-hidden="true"></i></span>
  <label for="ff_st_reg_terms_and_conditions">Acepto la política de privacidad</label>
</span>
</div>

                        <Button onClick={resetForm}>Limpiar Formulario</Button>
                        <Button type="submit">Enviar</Button>
                    </form>
                </section>
            </div>
        </Container>
    )
}





    


export default ContactPage
