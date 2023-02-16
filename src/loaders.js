import url from './url';

export async function IndexLoader(){
    const response = await fetch(url)
    //convert promise to JSON
    const data = response.json()

    console.log("INDEX LOADER", data)
    return data
}

export async function ShowLoader({params}){
    const response = await fetch(url + params.id + "/")
    const data = response.json()
    console.log("show loader", data)
    return data
}