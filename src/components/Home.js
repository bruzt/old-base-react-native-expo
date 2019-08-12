import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import { setMessage } from '../redux/actions/messageActions';

function Home(props){

   
    return (
        <Container>

            <Text>Home</Text>

            <AlertButton onPress={() => props.setMessage({ title: 'Alerta', text: 'Algo aconteceu' })}>
                <Text>Alerta</Text>
            </AlertButton>

        </Container>
    );
}


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Text = styled.Text`
    font-size: 20;
`;

const AlertButton = styled.TouchableOpacity`
    border: 1px;
    background: red;
    color: white;
    padding: 10px;
    margin-top: 10px;
`;

////////////////////////////

const mapDispatchToProps = (dispatch) => bindActionCreators({ setMessage }, dispatch);

export default connect(null, mapDispatchToProps)(Home);