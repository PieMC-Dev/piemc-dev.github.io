$('a[href^="#"]').click(function (e) {
    e.preventDefault();
    $(window).stop(true).scrollTo(this.hash, { duration: 500, interrupt: false });
});
anchors.add();