//@flow
import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Alert
} from "react-native";
import { Navigation } from "react-native-navigation";

import RowDivision from "../../_components/RowDivision";
import ColumnDivision from "../../_components/ColumnDivision";
import ClearIcon from "../../img/clearIcon.png";
import CalcButtons from "../../_components/_calculator/CalcButtons";
import { passwordStore } from "../../store/PasswordStore";
import ClearButton from "../../_components/_calculator/ClearButton";
import { messageHandler } from "../../_components/_calculator/HandleMessage.js/Messages";

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
export default class Home extends PureComponent<Props, State> {
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
      messageHandler.info();
    } else if (id === 2) {
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
    } else {
      messageHandler.success();
    }
  };

  checkSubmit = (input: any) => {
    const { operation } = this.state;
    if (input === "=" && operation != null) {
      return true;
    }
    return false;
  };

  /*************************************
   * Check if password is OK to redirect
   ************************************/
  shouldLogin = () => {
    const { rec, password } = this.state;

    let compare = rec.replace(/=/g, "");
    if (password !== "" && compare === password) {
      //should go to gallery
      this.setMessageBox(1);
    }
    return false;
  };

  handleValue = (input: any) => {
    const { rec, current, operation, password } = this.state;
    this.setState({ rec: rec + input });

    if (!this.shouldLogin()) {
      if (!this.editingPass()) {
        if (rec === "22++") {
          this.setMessageBox(1);
        } else if (rec === "22--") {
          this.setMessageBox(2);
        } else {
          if (this.isOperation(input)) {
            this.setState({
              operation: input,
              fstNumber: current,
              current: ""
            });
            return;
          } else if (this.checkSubmit(input)) {
            this.calculate(input);
            return;
          } else if (this.checkSubmit(input)) {
            this.clearResult();
            return;
          }
          this.setState({
            current: current + input
          });
        }
      } else {
        if (input === "=") {
          this.closeEditPassword();
          input = "";
        } else {
          this.setState({
            password: password + input,
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
      this.setMessageBox(3);
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
            <ClearButton onPress={this.clearResult} />
          </View>
        </View>

        <View style={styles.containerRows}>
          {/* 1 */}
          <CalcButtons value={"7"} handlePress={() => this.handleValue("7")} />

          <CalcButtons value={"8"} handlePress={() => this.handleValue("8")} />

          <CalcButtons value={"9"} handlePress={() => this.handleValue("9")} />

          <CalcButtons value={"/"} handlePress={() => this.handleValue("/")} />
        </View>
        <RowDivision />
        {/* 2 */}
        <View style={styles.containerRows}>
          <CalcButtons value={"4"} handlePress={() => this.handleValue("4")} />

          <CalcButtons value={"5"} handlePress={() => this.handleValue("5")} />

          <CalcButtons value={"6"} handlePress={() => this.handleValue("6")} />

          <CalcButtons value={"*"} handlePress={() => this.handleValue("*")} />
        </View>
        <RowDivision />
        {/* 3 */}
        <View style={styles.containerRows}>
          <CalcButtons value={"1"} handlePress={() => this.handleValue("1")} />

          <CalcButtons value={"2"} handlePress={() => this.handleValue("2")} />

          <CalcButtons value={"3"} handlePress={() => this.handleValue("3")} />

          <CalcButtons value={"-"} handlePress={() => this.handleValue("-")} />
        </View>
        <RowDivision />
        {/* 4 */}
        <View style={styles.containerRows}>
          <CalcButtons value={","} handlePress={() => this.handleValue(",")} />

          <CalcButtons
            value={"00"}
            handlePress={() => this.handleValue("00")}
          />

          <CalcButtons value={"0"} handlePress={() => this.handleValue("0")} />

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
    backgroundColor: "#000"
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
