
function parseData(data) {
    const formData = new FormData()
    for (let [key, value] of Object.entries(data)) {
        formData.append(key, value)
    }
    return formData
}

function request(url, data = false, method = 'GET', type = "FORMDATA") {
    return new Promise(async (resolve, reject)=>{
        const option = {
            method
        }
        if(data && method === 'POST') {
            option.body = type === 'JSON' ? JSON.stringify(data) : parseData(data)
        }
        const response = await fetch( process.env.REACT_APP_API_URL + url, option)
        const result = await response.json()
        if(response.ok) {
            resolve(result)
        } else {
            reject(result)
        }
    })
}

export const post = (url,data) => request(url, data, 'POST')
export const postJSON = (url,data) => request(url, data, 'POST', 'JSON')
export const get = (url) => request(url)