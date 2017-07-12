import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  List,
  ListItem,
  Thumbnail,
} from "native-base";

import styles from "./styles";

class ApprovedPage extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    name: React.PropTypes.string,
    index: React.PropTypes.number,
    list: React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func
  };

  render() {
    const { props: { name, index, list } } = this;
    console.log(this.props.navigation, "000000000");
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>{name ? this.props.name : "Approved List"}</Title>
          </Body>

          <Right />
        </Header>

        <Content padder>
          {
            list.length > 0
            ?
            <List dataArray={list}
              renderRow={(item) =>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={{ uri: item.thumbnail }} />
                  </Left>
                  <Body>
                    <Text>{item.title}</Text>
                  </Body>
                </ListItem>
              }>
            </List>
            :
            <Text>No item in this list</Text>
          }
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer())
  };
}

const mapStateToProps = state => ({
  name: state.user.name,
  index: state.list.selectedIndex,
  list: _.filter(state.list.list, x => _.includes(state.list.approved, x.id)),
});

export default connect(mapStateToProps, bindAction)(ApprovedPage);
