let newNum = 0

function calculateNum(num) {
    let res = num*2;
    return res
}

export const getNum = (req, res) => {
    res.status(200).json(newNum)
}

export const createNum = (req, res) => {
    const newN =  calculateNum(req.body.number)
    newNum = newN;
    res.status(201).json(newNum)
}