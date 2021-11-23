<template>
  <div id="app">
    <!-- <h1>Calculator</h1> -->
    <div @click="backspaceResult"><input disabled v-model="inputValue" id="result" v-on:keypress="numbersOnly" placeholder="0"></div>
    <div id="calc">
      <ul>
        <li class="calc__item"><button class="calc__button calc__button_top" @click="clearInputValue">С</button></li>
        <li class="calc__item"><button class="calc__button calc__button_top" @click="reverseInputValue">±</button></li>
        <li class="calc__item"><button class="calc__button calc__button_top">%</button></li>
        <li class="calc__item"><button class="calc__button calc__button_right">/</button></li>

        <li class="calc__item"><button class="calc__button calc__button_middle" @click="pushNumber(7)">7</button></li>
        <li class="calc__item"><button class="calc__button calc__button_middle" @click="pushNumber(8)">8</button></li>
        <li class="calc__item"><button class="calc__button calc__button_middle" @click="pushNumber(9)">9</button></li>
        <li class="calc__item"><button  style="padding-bottom: 5px" class="calc__button calc__button_right">✖</button></li>

        <li class="calc__item"><button class="calc__button calc__button_middle" @click="pushNumber(4)">4</button></li>
        <li class="calc__item"><button class="calc__button calc__button_middle" @click="pushNumber(5)">5</button></li>
        <li class="calc__item"><button class="calc__button calc__button_middle" @click="pushNumber(6)">6</button></li>
        <li class="calc__item"><button class="calc__button calc__button_right">−</button></li>

        <li class="calc__item"><button class="calc__button calc__button_middle" @click="pushNumber(1)">1</button></li>
        <li class="calc__item"><button class="calc__button calc__button_middle" @click="pushNumber(2)">2</button></li>
        <li class="calc__item"><button class="calc__button calc__button_middle" @click="pushNumber(3)">3</button></li>
        <li class="calc__item"><button class="calc__button calc__button_right">+</button></li>

        <li class="calc__item calc__item_null"><button class="calc__button calc__button_middle" @click="pushNumber(0)">0</button></li>
        <li class="calc__item"><button class="calc__button calc__button_middle" @click="pushNumber(',')">,</button></li>
        <li class="calc__item"><button class="calc__button calc__button_right">=</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isResultInputFloat: false,
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.$store.state.inputValue
      },
      set(value) {
        this.$store.commit('updateInputValue', value)
      }
    }
  },
  methods: {
    numbersOnly(value) {
      if (this.inputValue.length == 0 && (value.key == '0' || value.key == ',')) {
        value.preventDefault();
      }     
      if (this.inputValue.split('').find(item=>item==',') && value.key == ',') {
        value.preventDefault();
      }
      // value = (value) ? value : window.event;
      // var charCode = (value.which) ? value.which : value.keyCode;
      // if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 44) {
      //   value.preventDefault();
      // } else {
      //   return true;
      // }   
    },
    pushNumber(number) {
      if (number == '.') {
        number = ',';
      }
      if (this.inputValue.length == 0 && number == ',' || this.inputValue.split('').find(item=>item==',') && number == ',') {
        return
      }
      if (this.inputValue == '0' && number != ',') {
        this.inputValue = `${number}`;
        return
      }
      this.inputValue += `${number}`; 
    },
    clearInputValue() {
      this.inputValue = '0';
    },
    reverseInputValue() {
      if (this.inputValue.split('')[0] != '-' && this.inputValue.length!=0 && this.inputValue != '0' && parseFloat(this.inputValue.replace(',','.'))!= 0) {
        this.inputValue = '-' + this.inputValue
      } else if (this.inputValue.split('')[0] == '-') {
        this.inputValue = this.inputValue.slice(1);
      }
    },
    backspaceResult(){
      console.log(this.inputValue.length)
      if (this.inputValue.length == 1) {
        this.inputValue = '0';
      } else {
       this.inputValue = this.inputValue.slice(0,-1);
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', event=>{
      console.log(event.key)
      if ((event.key>=0 && event.key <=9) || (event.key == ',') || (event.key == '.')) {
        this.pushNumber(event.key)
      }
      if (event.key == 'Delete') {
        this.clearInputValue();
      }
      if (event.key == 'Backspace') {
        this.backspaceResult();
      }
    })
  }
}
</script>

<style>

@font-face {
    font-family: 'Montserrat';
    src:
            url('./fonts/Montserrat-Regular.woff2') format('woff2'),
            url('./fonts/Montserrat-Regular.woff') format('woff');
    font-display: swap;
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src:
            url('./fonts/Montserrat-SemiBold.woff2') format('woff2'),
            url('./fonts/Montserrat-SemiBold.woff') format('woff');
    font-display: swap;
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src:
            url('./fonts/Montserrat-Bold.woff2') format('woff2'),
            url('./fonts/Montserrat-Bold.woff') format('woff');
    font-display: swap;
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat';
    src:
            url('./fonts/Montserrat-ExtraBold.woff2') format('woff2'),
            url('./fonts/Montserrat-ExtraBold.woff') format('woff');
    font-display: swap;
    font-weight: 800;
    font-style: normal;
}

* {
  transition: 0.05s all;
}

:root {
  --color-main: rgb(0, 140, 121,0.8);
  --color-red: rgb(226, 125, 96);;
  --color-background: rgb(0, 140, 121, 0.5);
  --color-result: rgb(0, 140, 121, 0.3);
  --color-button: rgb(0, 140, 121, 0.5);
  --var-vertical-width: 5px;
}

html, body {
  outline: none;
  padding: 0;
  margin: 0;
}

html {
  background: var(--color-background);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#result {
  width: 305px;
  height: 60px;
  margin: 20px auto;
  padding: 0 15px;
  background: var(--color-result);
  font-size: 40px;
  font-weight: 600;
  color: white;
  outline: none;
  text-align: right;
  border: none;
  cursor: pointer;
}

#result::placeholder {
  color: white;
  opacity: 0.5;
}

#calc {
  margin: auto;
  /* padding-left: 1px; */
  width: 340px;
}

#calc ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.calc__item {
  width: 80px;
  height: 60px;
  padding-bottom: 5px;
  /* margin-right: var(--var-vertical-width); */
}

.calc__item:hover {
  opacity: .7;
}

.calc__button {
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 26px;
  font-weight: 500;
  /* border-radius: 40px; */
}

.calc__button_middle {
  background: var(--color-main);
  color: white !important;
}

.calc__button_right {
  background: var(--color-red);
}

.calc__item_null {
  width: calc(160px + var(--var-vertical-width));
}

</style>
