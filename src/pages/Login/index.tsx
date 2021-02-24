import Head from 'next/head'
import WiserLogo from '../../assets/wsp-logo.svg'
import styles from '../../styles/pages/Login.module.scss'
import Title from '../../components/title'
import CallText from '../../components/call-text'
import Label from '../../components/label'
import Error from '../../components/error'
import { useFormik } from 'formik'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import * as Yup from 'yup'


const Login: React.FC<any> = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: (values, { setSubmitting }) => {
            alert(JSON.stringify(values));

            setSubmitting(false);
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .required('É obrigatório informar seu e-mail.')
                .email('Informe um e-mail válido'),
            password: Yup.string()
                .required('É obrigatório informar sua senha.')
                .min(6, 'A senha deve ter no minimo 6 caracteres')
        })
    });

    return (
        <Container fluid className={styles.formheight}>
            <Head>
                <title>Login - Wiser</title>
                {/* Index o conteúdo e segue os links */}
                <meta name='robots' content='index/folow' />
                <meta name="description" content="Bem-vindo à plataforma de vendas da Wiser Educação." />
            </Head>

            <Form className={styles.formsignin} onSubmit={formik.handleSubmit}>
                <WiserLogo />
                <Title text='Ola, seja bem-vindo' />
                <CallText text='Para acessar a plataforma, faça seu login' />
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><Label text="E-mail" /> </Form.Label>
                    <Form.Control type="email" placeholder="Informe o email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email && formik.touched.email ? (<Error text={formik.errors.email} />) : null}
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label><Label text="Senha" /> </Form.Label>
                    <Form.Control type="password" placeholder="Senha" name="password" onChange={formik.handleChange} value={formik.values.password} />
                    {formik.errors.password && formik.touched.password ? (<Error text={formik.errors.password} />) : null}
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!formik.isValid || formik.isSubmitting}>
                    Enviar
                        </Button>
            </Form>
            

        </Container>
    )
}

export default Login