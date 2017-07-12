import React, { Component } from "react";
import { TouchableOpacity, ListView } from "react-native";
import { connect } from "react-redux";
import BlankPage2 from "../blankPage2";
import DrawBar from "../DrawBar";
import { DrawerNavigator, NavigationActions } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Thumbnail,
  SwipeRow,
  View,
} from "native-base";
import { Grid, Row } from "react-native-easy-grid";

import { setIndex, setList, approve, disapprove } from "../../actions/list";
import { openDrawer } from "../../actions/drawer";
import styles from "./styles";
import { getPuppies } from '../../api/rest';

import { SwipeListView } from 'react-native-swipe-list-view';


class Home extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    username: React.PropTypes.string,
    listName: React.PropTypes.string,
    setIndex: React.PropTypes.func,
    setList: React.PropTypes.func,
    list: React.PropTypes.arrayOf(React.PropTypes.object),
    openDrawer: React.PropTypes.func,
  };

  newPage(index) {
    this.props.setIndex(index);
    Actions.blankPage();
  }

  componentWillMount() {
    getPuppies().then(data => {
      this.props.setList(data);
    })
  }

  handleApprove(id) {
    this.props.approve(id);
  }

  handleDisapprove(id) {
    this.props.disapprove(id);
  }

  render() {
    console.log(DrawNav, "786785786");
    const { listName, username } = this.props;
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return (
      <Container style={styles.container}>
        <Header>
          <Left>

            <Button
              transparent
              onPress={() => {
                DrawerNav.dispatch(
                  NavigationActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "Home" })]
                  })
                );
                DrawerNav.goBack();
              }}
            >
              <Icon active name="power" />
            </Button>
          </Left>

          <Body>
            <Title>{`${listName} - ${username}`}</Title>
          </Body>

          <Right>
            <Button
              transparent
              onPress={() => DrawerNav.navigate("DrawerOpen")}
            >
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <SwipeListView
            closeOnRowBeginSwipe={true}
            dataSource={ds.cloneWithRows(this.props.list)}
            renderRow={ item => (
                            <ListItem avatar style={styles.rowFront}>
                <Left>
                  <Thumbnail source={{ uri: item.thumbnail }} />
                </Left>
                <Body>
                  <Text>{item.author}</Text>
                  <Text note>{item.title}</Text>
                </Body>
              </ListItem>

            )}
            renderHiddenRow={ data => (
              <View style={styles.rowBack}>
                <TouchableOpacity
                  style={styles.approve}
                  onPress={() => this.handleApprove(data.id)}
                >
                  <Text style={styles.approveText}>Approve</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.disapprove}
                  onPress={() => this.handleDisapprove(data.id)}
                >
                  <Text style={styles.disapproveText}>Disapprove</Text>
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={100}
            rightOpenValue={-100}
          />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    setIndex: index => dispatch(setIndex(index)),
    setList: list => dispatch(setList(list)),
    approve: id => dispatch(approve(id)),
    disapprove: id => dispatch(disapprove(id)),
    openDrawer: () => dispatch(openDrawer()),
  };
}
const mapStateToProps = state => ({
  username: state.user.username,
  list: state.list.list,
  listName: state.list.listName,
});

const HomeSwagger = connect(mapStateToProps, bindAction)(Home);
const DrawNav = DrawerNavigator(
  {
    Home: { screen: HomeSwagger },
    BlankPage2: { screen: BlankPage2 }
  },
  {
    contentComponent: props => <DrawBar {...props} />
  }
);
const DrawerNav = null;
DrawNav.navigationOptions = ({ navigation }) => {
  DrawerNav = navigation;
  return {
    header: null
  };
};
export default DrawNav;
