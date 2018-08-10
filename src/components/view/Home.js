//@flow
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  Alert
} from "react-native";
import RowDivision from "../../_components/RowDivision";
import ColumnDivision from "../../_components/ColumnDivision";
import ClearIcon from "../../img/clearIcon.png";
import CalcButtons from "../../_components/_calculator/CalcButtons";
import { passwordStore } from "../../store/PasswordStore";

type Props = {
  navigator: any
};

type State = {
  current: string,
  fstNumber: string,
  operation: any,
  rec: string,
  password: string,
  settingPass: boolean,
  fromDb: string
};
export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      current: "",
      fstNumber: "",
      operation: null,
      rec: "",
      password: "",
      settingPass: false,
      fromDb: ""
    };
  }

  componentDidMount = () => {
    passwordStore.getPassword().then(result => {
      console.log("fromDB: ", result);
      this.setState({ password: result });
    });
    /* passwordStore.deletePassword(); */
  };

  /*******************************************
   * Check if the user is editing the password
   ******************************************/
  editingPass = () => {
    const { settingPass } = this.state;
    return settingPass ? true : false;
  };

  /******************************************
   * Check if what user typed is some operand
   *****************************************/
  isOperation = (input: string) => {
    if (["+", "-", "*", "/"].indexOf(input) > -1) {
      return true;
    }
    return false;
  };

  /**********************************
   * Giving information boxes to user
   * 1 - Information about commands
   * 2 - Info about reset pass
   *********************************/
  setMessageBox = (id: number) => {
    if (id === 1) {
      Alert.alert(
        "Information and commands: ",
        "123++ : Information \n\n222++ : New password \n\n\n**REMEMBER**\nAlways before type your password press '=' ",
        [{ text: "OK", onPress: () => {} }],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Your password is about to change !! ",
        "1. After you press OK you can type \nyour password. \n\n2. It'll be recorded when you press '=' \n\n\nTip: Make an strong password (at least 3 numbers and 2 operands)",
        [
          {
            text: "Cancel",
            onDismiss: () => {}
          },
          { text: "OK", onPress: () => this.openEditPassword() }
        ],
        { cancelable: false }
      );
    }
  };

  /*************************************
   * Check if password is OK to redirect
   ************************************/
  shouldLogin = () => {
    const { rec, password } = this.state;
    console.log("pass", password, rec);
    let compare = rec.replace(/=/g, "");
    if (password !== "" && compare === password) {
      //should go to gallery
      this.setMessageBox(1);
      //return true;
    }
    return false;
  };

  handleValue = (input: any) => {
    this.setState({ rec: this.state.rec + input });
    if (!this.shouldLogin()) {
      if (!this.editingPass()) {
        if (this.state.rec === "22++") {
          this.setMessageBox(1);
        } else if (this.state.rec === "22--") {
          this.setMessageBox(2);
        } else {
          if (this.isOperation(input)) {
            this.setState({
              operation: input,
              fstNumber: this.state.current,
              current: ""
            });
            return;
          } else if (input === "=" && this.state.operation != null) {
            this.calculate(input);
            return;
          } else if (input === "=" && this.state.operation === null) {
            this.clearResult();
            return;
          }
          this.setState({
            current: this.state.current + input
          });
        }
      } else {
        //editing password
        if (input === "=") {
          this.closeEditPassword();
          input = "";
        } else {
          //save to asyncstorage
          this.setState({
            password: this.state.password + input,
            current: "",
            fstNumber: "",
            operation: null,
            rec: ""
          });
        }
      }
    }
  };

  openEditPassword = () => {
    this.setState({
      password: "",
      settingPass: true
    });
  };

  closeEditPassword = () => {
    const { password } = this.state;
    if (password) {
      passwordStore.savePassword(this.state.password);
    }
    this.setState({
      settingPass: false
    });
  };

  calculate = (input: any) => {
    let calculated;
    switch (this.state.operation) {
      case "+":
        calculated =
          parseFloat(this.state.fstNumber) + parseFloat(this.state.current);
        break;
      case "-":
        calculated =
          parseFloat(this.state.fstNumber) - parseFloat(this.state.current);
        break;
      case "/":
        calculated =
          parseFloat(this.state.fstNumber) / parseFloat(this.state.current);
        break;
      case "*":
        calculated =
          parseFloat(this.state.fstNumber) * parseFloat(this.state.current);
        break;
      default:
        break;
    }
    if (calculated && !isNaN(calculated) && calculated !== undefined) {
      calculated = calculated.toString();
      this.setState({
        current: calculated,
        operation: null,
        frstNumber: ""
      });
    } else {
      this.setState({
        current: "",
        operation: null,
        frstNumber: ""
      });
    }
  };

  /**************
   * Reset values
   *************/
  clearResult = () => {
    this.setState({
      current: "",
      fstNumber: "",
      operation: null,
      rec: ""
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerVisorDirection}>
          <View style={styles.containerVisor}>
            <View
              style={{
                width: "80%",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                padding: 5
              }}
            >
              <Text style={styles.result}>{this.state.current}</Text>
            </View>
            <TouchableNativeFeedback onPress={() => this.clearResult()}>
              <View
                style={{
                  width: "20%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image style={styles.clearIcon} source={ClearIcon} />
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>

        <View style={styles.containerRows}>
          {/* 1 */}
          <CalcButtons value={"7"} handlePress={() => this.handleValue("7")} />

          <ColumnDivision />

          <CalcButtons value={"8"} handlePress={() => this.handleValue("8")} />

          <ColumnDivision />

          <CalcButtons value={"9"} handlePress={() => this.handleValue("9")} />

          <ColumnDivision />

          <CalcButtons value={"/"} handlePress={() => this.handleValue("/")} />
        </View>
        <RowDivision />
        {/* 2 */}
        <View style={styles.containerRows}>
          <CalcButtons value={"4"} handlePress={() => this.handleValue("4")} />

          <ColumnDivision />

          <CalcButtons value={"5"} handlePress={() => this.handleValue("5")} />

          <ColumnDivision />

          <CalcButtons value={"6"} handlePress={() => this.handleValue("6")} />

          <ColumnDivision />

          <CalcButtons value={"*"} handlePress={() => this.handleValue("*")} />
        </View>
        <RowDivision />
        {/* 3 */}
        <View style={styles.containerRows}>
          <CalcButtons value={"1"} handlePress={() => this.handleValue("1")} />

          <ColumnDivision />

          <CalcButtons value={"2"} handlePress={() => this.handleValue("2")} />

          <ColumnDivision />

          <CalcButtons value={"3"} handlePress={() => this.handleValue("3")} />

          <ColumnDivision />

          <CalcButtons value={"-"} handlePress={() => this.handleValue("-")} />
        </View>
        <RowDivision />
        {/* 4 */}
        <View style={styles.containerRows}>
          <CalcButtons value={","} handlePress={() => this.handleValue(",")} />

          <ColumnDivision />

          <CalcButtons
            value={"00"}
            handlePress={() => this.handleValue("00")}
          />

          <ColumnDivision />

          <CalcButtons value={"0"} handlePress={() => this.handleValue("0")} />

          <ColumnDivision />

          <CalcButtons value={"+"} handlePress={() => this.handleValue("+")} />
        </View>
        <RowDivision />
        {/* 5 */}
        <View style={styles.containerRows}>
          <TouchableNativeFeedback onPress={() => this.handleValue("=")}>
            <View style={styles.containerEqual}>
              <Text style={styles.equalButton}>=</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <RowDivision />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
    backgroundColor: "#000"
  },
  containerButtons: {
    width: "24.6%",
    backgroundColor: "#3b3c3d",
    alignItems: "center",
    justifyContent: "center"
  },
  containerEqual: {
    width: "100%",
    backgroundColor: "#48db48",
    alignItems: "center",
    justifyContent: "center"
  },
  equalButton: {
    fontSize: 24,
    color: "#3b3c3d"
  },
  buttons: {
    fontSize: 24,
    color: "#06FF06"
  },
  result: {
    fontSize: 40,
    color: "#06FF06"
  },
  clearIcon: {
    width: 30,
    height: 30
  },
  containerRows: {
    flexDirection: "row",
    width: "100%",
    height: 80
  },
  containerVisorDirection: {
    flexDirection: "row",
    marginBottom: 1
  },
  containerVisor: {
    flexDirection: "row",
    width: "100%",
    height: 160,
    backgroundColor: "#3b3c3d"
  }
});
