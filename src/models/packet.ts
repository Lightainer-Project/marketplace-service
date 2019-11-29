import mongoose, { Schema, Document } from "mongoose";

export interface PacketInterface extends Document {
  name: string;
  version: string;
  author: string;
  description: string;
}

const PacketSchema: Schema = new Schema({
  name: { type: String, required: true },
  version: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  installation: { 
    installType: String,
    url: String
  },
  configs: [
    {
      path: String
    }
  ],
  startup: {
    command: String,
    autostart: Boolean
  }
});

const Packet = mongoose.model<PacketInterface>("Packet", PacketSchema);
export default Packet;