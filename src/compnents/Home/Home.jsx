import React from "react";
import { heading } from "../../heading";
import { problems } from "../../problems";
import { Link } from "react-router-dom";
import "./Home.css";
import {
  Table,
  Thead,
  Tbody,
  Center,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
const Home = () => {
  return (
    <>
      <div className="container">
        <TableContainer>
          <Table variant="unstyled" borderColor="black">
            <Thead className="title">
              <Tr>
                {heading.map((head) => {
                  return <th>{head.col_name}</th>;
                })}
              </Tr>
            </Thead>
            <Tbody>
              {problems.map((problems) => {
                return (
                  <Tr>
                    <Td>
                      <Center>{problems.no}</Center>
                    </Td>
                    <Td>
                      <Center>
                        <Link
                          to={problems.url}
                          target="_blank"
                          className="pro_name"
                        >
                          {problems.name}
                        </Link>
                      </Center>
                    </Td>
                    <Td>
                      <Center>{problems.submission}</Center>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Home;
