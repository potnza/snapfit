import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    const foods = [
      { name: 'Arroz', calories: 129, servingSize: '100g' },
      { name: 'Feijão', calories: 100, servingSize: '100g' },
      { name: 'Frango grelhado', calories: 165, servingSize: '100g' },
      { name: 'Ovo cozido', calories: 155, servingSize: '1 ovo (50g)' },
      { name: 'Banana', calories: 89, servingSize: '1 unidade (100g)' },
      { name: 'Maçã', calories: 52, servingSize: '1 unidade (100g)' },
      { name: 'Cenoura', calories: 41, servingSize: '1 unidade (100g)' },
      { name: 'Pão integral', calories: 250, servingSize: '100g' },
      { name: 'Iogurte natural', calories: 59, servingSize: '100g' },
      { name: 'Alface', calories: 15, servingSize: '100g' },
      { name: 'Salmão grelhado', calories: 206, servingSize: '100g' },
      { name: 'Queijo branco', calories: 98, servingSize: '100g' },
      { name: 'Aveia em flocos', calories: 68, servingSize: '100g' },
      { name: 'Tomate', calories: 18, servingSize: '1 unidade (100g)' },
      { name: 'Abacate', calories: 160, servingSize: '1 unidade (100g)' },
      { name: 'Espinafre cozido', calories: 23, servingSize: '100g' },
      { name: 'Carne moída magra', calories: 201, servingSize: '100g' },
      { name: 'Batata-doce cozida', calories: 86, servingSize: '100g' },
      { name: 'Mamão', calories: 43, servingSize: '1 unidade (100g)' },
      { name: 'Atum em lata', calories: 113, servingSize: '100g' },
      { name: 'Brócolis cozido', calories: 35, servingSize: '100g' },
      { name: 'Lentilhas cozidas', calories: 116, servingSize: '100g' },
      { name: 'Amêndoas', calories: 579, servingSize: '100g' },
      { name: 'Feijão preto cozido', calories: 132, servingSize: '100g' },
      { name: 'Kiwi', calories: 61, servingSize: '1 unidade (100g)' },
      { name: 'Pepino', calories: 15, servingSize: '1 unidade (100g)' },
      { name: 'Pêra', calories: 57, servingSize: '1 unidade (100g)' },
      { name: 'Batata cozida', calories: 87, servingSize: '100g' },
      { name: 'Iogurte grego', calories: 59, servingSize: '100g' },
      { name: 'Queijo cottage', calories: 98, servingSize: '100g' },
      { name: 'Pasta de amendoim', calories: 589, servingSize: '100g' },
      { name: 'Cogumelos', calories: 22, servingSize: '100g' },
      { name: 'Abóbora cozida', calories: 20, servingSize: '100g' },
      { name: 'Melancia', calories: 30, servingSize: '1 fatia (100g)' },
      { name: 'Cereja', calories: 50, servingSize: '10 unidades (100g)' },
      { name: 'Quinoa cozida', calories: 120, servingSize: '100g' },
      { name: 'Laranja', calories: 47, servingSize: '1 unidade (100g)' },
      { name: 'Cebola', calories: 40, servingSize: '1 unidade (100g)' },
      { name: 'Pimentão', calories: 31, servingSize: '1 unidade (100g)' },
      { name: 'Ameixa', calories: 46, servingSize: '1 unidade (100g)' },
      { name: 'Tofu', calories: 76, servingSize: '100g' },
      { name: 'Melão', calories: 36, servingSize: '1 fatia (100g)' },
      { name: 'Morango', calories: 32, servingSize: '10 unidades (100g)' },
      { name: 'Pistache', calories: 562, servingSize: '100g' },
      { name: 'Ovo frito', calories: 196, servingSize: '1 ovo (50g)' },
      { name: 'Arroz integral cozido', calories: 123, servingSize: '100g' },
      { name: 'Feijão vermelho cozido', calories: 140, servingSize: '100g' },
      { name: 'Sardinha em lata', calories: 208, servingSize: '100g' },
      { name: 'Pêssego', calories: 39, servingSize: '1 unidade (100g)' },
      { name: 'Couve-flor cozida', calories: 25, servingSize: '100g' },
      { name: 'Leite desnatado', calories: 33, servingSize: '100ml' },
      // Adicione mais alimentos conforme necessário
    ];

    // Adicionar alimentos ao banco de dados
    await prisma.food.createMany({
      data: foods,
    });

    console.log('Alimentos foram adicionados ao banco de dados.');
  } catch (error) {
    console.error('Erro ao adicionar alimentos ao banco de dados:', error);
  } finally {
    // Fechar a conexão com o banco de dados
    await prisma.$disconnect();
  }
}

seedDatabase();
