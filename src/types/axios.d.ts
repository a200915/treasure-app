interface ApiRes<T> {
    code: number,
    data: T,
    message: string,
    success: boolean
}
