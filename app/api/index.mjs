export async function get(req) {
  let count = req.session?.count || 0
  count += 1

  return {
    session: { count },
    json: {
      message: 'Hello from your api route!',
      count
    }
  }
}
export async function post(req) {
  let count = req.session.count || 0
  return {
    session: { count }
  }
}