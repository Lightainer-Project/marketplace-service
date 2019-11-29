import mongoose, { Schema, Document } from "mongoose";

export interface PacketInterface extends Document {
  title: string;
  author: string;
}

const PacketSchema: Schema = new Schema({
  name: { type: String, required: true },
  version: { type: String, required: true },
  author: { type: String, required: true }
});

const Packet = mongoose.model<PacketInterface>("Packet", PacketSchema);
export default Packet;