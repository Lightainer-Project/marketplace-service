import { Request, Response } from "express";
import Packet from "../models/packet";

export const allPackets = (req: Request, res: Response) => {
  const packets = Packet.find((err: any, packets: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(packets);
    }
  });
};

export const showPacket = (req: Request, res: Response) => {
  const packet = Packet.findById(req.params.id, (err: any, packet: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(packet);
    }
  });
};

export const addPacket = (req: Request, res: Response) => {
  const packet = new Packet(req.body);
  packet.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(packet);
    }
  });
};

export const updatePacket = (req: Request, res: Response) => {
  let packet = Packet.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err: any, packet: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(packet);
      }
    }
  );
};

export const deletePacket = (req: Request, res: Response) => {
  const packet = Packet.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Packet deleted from database");
    }
  });
};