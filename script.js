function showMore() {
  var moreImages = document.getElementById('moreImages');
  var loadMoreBtn = document.getElementById('loadMore');

  // Tampilkan gambar tambahan
  if (moreImages.style.display === 'none') {
    moreImages.style.display = 'block'; // Tampilkan gambar
    loadMoreBtn.innerHTML = '<button class="btn btn-purple" onclick="showLess()">▲ Show Less</button>';
  }
}

function showLess() {
  var moreImages = document.getElementById('moreImages');
  var loadMoreBtn = document.getElementById('loadMore');

  // Sembunyikan gambar tambahan
  moreImages.style.display = 'none';
  loadMoreBtn.innerHTML = '<button class="btn btn-purple" onclick="showMore()">▼ Show More</button>';
}
