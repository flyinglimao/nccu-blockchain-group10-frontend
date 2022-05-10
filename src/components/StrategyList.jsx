import {
  Container,
  Box,
  FormControlLabel,
  Switch,
  TextField,
  Avatar,
  Collapse,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Grid,
  Link,
  Button,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import { Hero } from "./Hero";
import styled from "@emotion/styled";
import { useState } from "react";

const StrategyIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const strategies = [
  {
    name: "MACD",
    logo: "https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg",
    description: "A simple MACD strategy... maybe.",
    cumulativeROI: 1.3223,
    startedAt: new Date("2021-08-01"),
    allowed: true,
    investedValue: 3000,
    currentValue: 3021.34,
    totalInvestedValue: 93021.09,
    investToken: "0xd92e713d051c37ebb2561803a3b5fbabc4962431",
    strategyContract: "0xd92e713d051c37ebb2561803a3b5fbabc4962431",
    poolId: 1,
    fee: 100,
    stopLoss: 1000,
  },
  {
    name: "MACD 2",
    logo: "https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg",
    description: "A simple MACD strategy... maybe.",
    cumulativeROI: 1.3223,
    startedAt: new Date("2021-08-01"),
    allowed: false,
    investedValue: 0,
    currentValue: 0,
    totalInvestedValue: 93021.09,
    investToken: "0xd92e713d051c37ebb2561803a3b5fbabc4962431",
    strategyContract: "0xd92e713d051c37ebb2561803a3b5fbabc4962431",
    poolId: 1,
    fee: 100,
    stopLoss: 0,
  },
  {
    name: "MACD 3",
    logo: "https://pancakeswap.finance/images/tokens/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg",
    description: "A simple MACD strategy... maybe.",
    cumulativeROI: 1.3223,
    startedAt: new Date("2021-08-01"),
    allowed: true,
    investedValue: 0,
    currentValue: 0,
    totalInvestedValue: 93021.09,
    investToken: "0xd92e713d051c37ebb2561803a3b5fbabc4962431",
    strategyContract: "0xd92e713d051c37ebb2561803a3b5fbabc4962431",
    poolId: 1,
    fee: 100,
    stopLoss: 0,
  },
];

const InfoList = styled.ul`
  list-style: none;
  padding-left: 0;
  li {
    display: flex;
    justify-content: space-between;
  }
`;

function Strategy(props) {
  const [open, setOpen] = useState(false);
  const { info, setInvestStrategy, setInvestType } = props;
  return (
    <>
      <TableRow
        onClick={() => setOpen((e) => !e)}
        sx={{ "& > *": { borderBottom: "unset" } }}
      >
        <TableCell>
          <Avatar>
            <StrategyIcon src={info.logo} alt={info.name} />
          </Avatar>
        </TableCell>
        <TableCell>
          <Typography variant="h6" component="p">
            {info.name}
          </Typography>
          <Typography variant="subtitle" component="p">
            {info.startedAt.toLocaleString()}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6" component="p">
            Invested
          </Typography>
          <Typography variant="subtitle" component="p">
            {info.investedValue} USD
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6" component="p">
            Current Value
          </Typography>
          <Typography variant="subtitle" component="p">
            {info.currentValue} USD
          </Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6" component="p">
            Annualized ROI
          </Typography>
          <Typography variant="subtitle" component="p">
            {(
              (info.cumulativeROI /
                (new Date().getTime() - info.startedAt.getTime())) *
                (86400 * 1000 * 365) *
                100 -
              100
            ).toFixed(2)}{" "}
            %
          </Typography>
        </TableCell>
        <TableCell>
          Detail
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="body"
                component="p"
                sx={{ marginTop: 3, marginBottom: 1 }}
              >
                {info.description}
              </Typography>
              <Grid container spacing={4} alignItems="center">
                <Grid item xs={3}>
                  <InfoList>
                    <li>
                      <span>Total Value:</span>
                      <span>{info.totalInvestedValue} USD</span>
                    </li>
                    <li>
                      <span>Invest Token:</span>
                      <span>
                        <Link
                          href={`https://rinkeby.etherscan.io/address/${info.investToken}`}
                          target="_blank"
                        >
                          USDT
                        </Link>
                      </span>
                    </li>
                    <li>
                      <Link
                        href={`https://rinkeby.etherscan.io/address/${info.strategyContract}`}
                        target="_blank"
                      >
                        View Contract
                      </Link>
                    </li>
                  </InfoList>
                </Grid>
                <Grid item xs={9}>
                  <Grid
                    container
                    spacing={3}
                    alignItems="stretch"
                    sx={{ height: "100%" }}
                  >
                    <Grid item xs={6}>
                      <Paper
                        sx={{
                          paddingTop: 2,
                          paddingBottom: 2,
                          paddingLeft: 3,
                          paddingRight: 3,
                        }}
                      >
                        <Typography variant="h6" component="p">
                          Invested
                        </Typography>
                        <Typography variant="body" component="p">
                          {info.investedValue} USDT
                        </Typography>
                      </Paper>
                    </Grid>
                    <Grid item xs={6}>
                      <Paper
                        sx={{
                          paddingTop: 2,
                          paddingBottom: 2,
                          paddingLeft: 3,
                          paddingRight: 3,
                        }}
                      >
                        <Typography variant="h6" component="p">
                          Current Value
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="body" component="p">
                            {info.investedValue} USDT
                          </Typography>
                          <div>
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{ minWidth: "32px", marginRight: "8px" }}
                              onClick={() => {
                                setInvestStrategy(info.poolId);
                                setInvestType("Withdraw");
                              }}
                            >
                              -
                            </Button>
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{ minWidth: "32px" }}
                              onClick={() => {
                                setInvestStrategy(info.poolId);
                                setInvestType("Deposit");
                              }}
                            >
                              +
                            </Button>
                          </div>
                        </Box>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export function StrategyList() {
  const [investStrategy, setInvestStrategy] = useState(-1);
  const [investType, setInvestType] = useState("Deposit");

  return (
    <Container maxWidth="lg">
      <Hero />
      <Dialog
        open={investStrategy > 0}
        onClose={() => {
          setInvestStrategy(-1);
        }}
        fullWidth
      >
        <DialogTitle>{investType}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={`${investType} Amount`}
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setInvestStrategy(-1)}>Cancel</Button>
          <Button onClick={() => {}}>{investType}</Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Only Allowed"
          />
          <FormControlLabel control={<Switch />} label="Only Invested" />
        </div>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
        />
      </Box>
      <TableContainer component={Paper} sx={{ marginTop: "12px" }}>
        <Table aria-label="collapsible table">
          <TableBody>
            {strategies.map((strategy, idx) => (
              <Strategy
                info={strategy}
                isLast={idx === strategies.length - 1}
                key={`strategy-${idx}`}
                setInvestStrategy={setInvestStrategy}
                setInvestType={setInvestType}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
