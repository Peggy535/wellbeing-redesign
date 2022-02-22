<script>
  var text = new Blotter.Text("JH Online Therapies", {
    family : "Eiko-Thin",
    size : 120,
    fill : "#171717"
  });

  var material = new Blotter.SlidingDoorMaterial();

  var blotter = new Blotter(material, { texts : text });

  var scope = blotter.forText(text);

  scope.appendTo(document.body);
</script>