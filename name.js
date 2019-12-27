
function study (value1, value2) {
    this.value1 = value1
    this.value2 = value2

    this.func = () => {
        console.log("What")
    }
}

const problem = new study(undefined, undefined)
problem.func()