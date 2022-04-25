#!/bin/bash
pcregrep -M 'publish .*\n.*publish .*\n.*publishPacket .*\n.*unsubscribeFrom' $1
