import express, { Application } from "express";
import * as PacketController from "./controllers/packetController";

const router = express.Router();

router.get("/packets", PacketController.allPackets);

router.get("/packets/:id", PacketController.showPacket);

router.post("/packets", PacketController.addPacket);

router.patch("/packets/:id", PacketController.updatePacket);

router.delete("/packets/:id", PacketController.deletePacket);

export default router;