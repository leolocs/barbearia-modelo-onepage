# Barbearia — modelo one page

Site estático em HTML, CSS e JavaScript, pronto para publicação em hospedagem estática, incluindo GitHub Pages. Não requer instalação de dependências nem processo de build.

## Personalização

Edite o objeto `CONFIG` no início de [`app.js`](./app.js) para alterar o nome, o link externo de agendamento, os serviços, preços e durações, os dados do profissional, o endereço e o mapa incorporado, horários, Instagram, textos demonstrativos, perguntas frequentes e o modo demonstrativo. Deixe `bookingUrl` vazio até ter o endereço da aplicação externa; nesse caso, os botões mostram o aviso de agendamento em breve. Todos os botões usam a mesma configuração.

Troque os arquivos `.webp` em `assets/images/` para atualizar as fotografias. As versões `600`, `800`, `960`, `1000` e `1600` são servidas em `srcset` conforme o uso. Ao publicar com dados reais, atualize as informações ilustrativas, o aviso demonstrativo no rodapé e defina `demoMode` como `false` para liberar a indexação.

As cores e as fontes Germania One e Manrope estão definidas no início de [`styles.css`](./styles.css), nas variáveis CSS.

## Imagens demonstrativas

As fotografias demonstrativas da galeria e do espaço foram obtidas no Unsplash e convertidas localmente para WebP. O retrato do profissional usa `assets/images/natan.jpg`, fornecida pelo usuário.

- [`barbeiro-em-acao`](https://images.unsplash.com/photo-1503951914875-452162b0f3f1): Unsplash, imagem `photo-1503951914875-452162b0f3f1`.
- [`degrade-detalhe`](https://images.unsplash.com/photo-1599351431202-1e0f0137899a): Unsplash, imagem `photo-1599351431202-1e0f0137899a`.
- [`corte-tradicional`](https://images.unsplash.com/photo-1622286342621-4bd786c2447c): Unsplash, imagem `photo-1622286342621-4bd786c2447c`.
- [`corte-em-execucao`](https://images.unsplash.com/photo-1605497788044-5a32c7078486): Unsplash, imagem `photo-1605497788044-5a32c7078486`.
- [`barba-detalhe`](https://images.unsplash.com/photo-1532710093739-9470acff878f): Unsplash, imagem `photo-1532710093739-9470acff878f`.
- [`corte-moderno`](https://images.unsplash.com/photo-1622296089863-eb7fc530daa8): Unsplash, imagem `photo-1622296089863-eb7fc530daa8`.
- [`interior-barbearia`](https://images.unsplash.com/photo-1585747860715-2ba37e788b70): Unsplash, imagem `photo-1585747860715-2ba37e788b70`.

Confirme que há autorização para publicar `natan.jpg`. Consulte a [licença do Unsplash](https://unsplash.com/license) antes de redistribuir ou reutilizar as demais imagens em outros projetos. O crédito acima registra as fontes para este modelo; substitua as fotografias ilustrativas por imagens autorizadas da barbearia ao publicar.

## Visualização local

Abra `index.html` diretamente ou inicie um servidor estático na pasta do projeto, por exemplo:

```powershell
python -m http.server 8000
```
