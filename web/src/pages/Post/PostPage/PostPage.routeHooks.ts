import { db } from '$api/src/lib/db'

export async function routeParameters() {
  return (
    await db.post.findMany({
      take: 1000,
    })
  ).map((post) => ({
    id: post.id,
  }))
}
