export const setResponse = (data, response) => {
    response.staus(200)
        .json(data);
}

export const setErrorResponse = (err, response) =>{
    response.status(500)
        .json({
            code: "serviceError",
            message: 'Error occured while processing your request.'
        })
}