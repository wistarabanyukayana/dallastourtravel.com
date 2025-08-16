import prisma from "./prisma";

async function main() {
  const test = await prisma.test.create({ data: { name: "Hello World" } });
  console.log(test);
}

main().catch(console.error);
