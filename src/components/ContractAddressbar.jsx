import React, { useState } from "react";
import "./ContractAddressbar.css";
import IconButton from "@mui/material/IconButton";
import { ContentCopy as ContentCopyIcon } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";

function ContractAddressbar() {
  const [textToCopy, setTextToCopy] = useState(
    "0x0a38bc18022b0ccb043f7b730b354d554c6230f1"
  );
  const [tooltipText, setToolptipText] = useState("Click to copy");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setToolptipText("Copied");
  };

  const restoreTooltipText = () => {
    setToolptipText("Click to copy");
  };

  return (
    <>
      <nav className="cabar">
        <div className="cabar-container">
          {/* <div className="contract">
            <div className="contract-text">
              0x0a3...30f1
            </div>
            <Tooltip onOpen={restoreTooltipText} title={tooltipText}>
              <IconButton
                className="pad"
                color="info"
                size="small"
                onClick={copyToClipboard}
              >
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </div> */}
          {/* <div className="contract">
            Contract address: 0x0a38bc18022b0ccb043f7b730b354d554c6230f1
          </div>
          <Tooltip onOpen={restoreTooltipText} title={tooltipText}>
            <IconButton
              className="pad"
              color="info"
              size="small"
              onClick={copyToClipboard}
            >
              <ContentCopyIcon />
            </IconButton>
          </Tooltip> */}
          <div className="flex-style">
            <Tooltip onOpen={restoreTooltipText} title={tooltipText}>
              <IconButton
                className="pad"
                color="info"
                size="small"
                onClick={copyToClipboard}
              >
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
            <div className="contract-text">
              0x0a3...30f1
            </div>
          </div>
          <div className="flex-style">
            <a
              href="https://bscscan.com/token/0x0a38bc18022b0ccb043f7b730b354d554c6230f1"
              target="_blank"
              rel="nofollow noreferrer"
              className="link"
            >
              <img src="/images/bsc.png" alt="bsc" />
              <div className="contract-text-img">contract</div>
              
            </a>
          </div>
          <div className="flex-style">
            <a
              href="https://coinmarketcap.com/currencies/hifi-gaming-society"
              target="_blank"
              rel="nofollow noreferrer"
              className="link"
            >
              <img src="/images/cmc.png" alt="cmc" />
              <div className="contract-text-img">coinmarketcap</div>
              
            </a>
          </div>
          <div className="flex-style">
            <a
              href="https://www.coingecko.com/en/coins/hifi-gaming-society"
              target="_blank"
              rel="nofollow noreferrer"
              className="link"
            >
              <img src="/images/cgk.png" alt="cgk" />
              <div className="contract-text-img">coingecko</div>
              
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ContractAddressbar;
