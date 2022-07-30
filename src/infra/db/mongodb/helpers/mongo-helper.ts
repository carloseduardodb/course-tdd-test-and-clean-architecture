import { MongoClient, Collection } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL)
  },

  getCollection (name: string): Collection {
    const db = this.client.db()
    return db.collection(name)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
