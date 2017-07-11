import React, { Component } from "react";
import { Image } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Icon,
  View,
  Text
} from "native-base";
import { Field, reduxForm } from "redux-form";
import { setUser } from "../../actions/user";
import styles from "./styles";

const background = require("../../../images/shadow.png");

const validate = values => {
  const error = {};
  error.username = "";
  error.password = "";
  var ema = values.username;
  var pw = values.password;
  if (values.username === undefined) {
    ema = "";
  }
  if (values.password === undefined) {
    pw = "";
  }
  if (pw != 'password' && pw !== "") {
    error.password = "wrong";
  }
  return error;
};

class Login extends Component {
  static propTypes = {
    setUser: React.PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.renderInput = this.renderInput.bind(this);
  }
  
  setUser(username) {
    this.props.setUser(username);
  }
  renderInput({
    input,
    label,
    type,
    meta: { touched, error, warning },
    inputProps
  }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <Item error={hasError}>
        <Icon active name={input.name === "username" ? "person" : "unlock"} />
        <Input
          autoCapitalize='none'
          placeholder={input.name === "username" ? "USERNAME" : "PASSWORD"}
          {...input}
        />
        {hasError
          ? <Item style={{ borderColor: "transparent" }}>
              <Icon active style={{ color: "red", marginTop: 5 }} name="bug" />
              <Text style={{ fontSize: 15, color: "red" }}>{error}</Text>
            </Item>
          : <Text />}
      </Item>
    );
  }
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                <Field name="username" component={this.renderInput} />
                <Field name="password" component={this.renderInput} />
                <Button
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate("Home")}
                >
                  <Text>Login</Text>
                </Button>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}
const LoginSwag = reduxForm(
  {
    form: "test",
    validate
  },
  function bindActions(dispatch) {
    return {
      setUser: username => dispatch(setUser(username))
    };
  }
)(Login);
LoginSwag.navigationOptions = {
  header: null
};
export default LoginSwag;
