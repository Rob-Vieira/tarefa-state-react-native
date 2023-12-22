import { TouchableOpacity, TextInput, View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Theme from '../theme/Theme';
import Styles from '../theme/Styles';
import realm from '../services/RealmService';

export default function Cadastro({ navigation }) {
    const validationSchema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
        password: yup.string().min(6, 'O campo precisa ter no mínimo 6 caracteres.')
    });

    const handleSubmit = async (values, { resetForm }) => {
        let newUser;

        realm.write(() => {
            newUser = realm.create('User', {
                _id: Date.parse(new Date()),
                name: values.name,
                email: values.email,
                password: values.password,
            })

            resetForm();
        });

        navigation.navigate({ name: 'Cadastrados', params: {id: newUser._id} })
    }

    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {
                ({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View style={Styles.container}>
                        <Text style={Styles.title}>Cadastro</Text>
                        <Text style={Styles.label}>Nome:</Text>                        
                        <TextInput
                            placeholder='Nome'
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            style={Styles.input}
                            placeholderTextColor={Theme.text}
                        />
                        <Text style={{ color: 'red' }}>{errors.name}</Text>

                        <Text style={Styles.label}>E-mail:</Text>                
                        <TextInput
                            placeholder='E-mail'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={Styles.input}
                            placeholderTextColor={Theme.text}
                        />
                        <Text style={{ color: 'red' }}>{errors.email}</Text>

                         <Text style={Styles.label}>Senha:</Text>               
                        <TextInput
                            placeholder='******'
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            style={Styles.input}
                            placeholderTextColor={Theme.text}
                        />
                        <Text style={{ color: 'red' }}>{errors.password}</Text>

                        <TouchableOpacity style={Styles.btn} onPress={handleSubmit}>
                            <Text style={Styles.btnText} >Enviar</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </Formik>
    );
}