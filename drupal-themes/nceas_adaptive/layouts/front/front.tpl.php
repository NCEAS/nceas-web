<?php
/**
 * @file
 * Template for a 2 column panel layout.
 *
 * This template provides a two column panel display layout, with
 * each column roughly equal in width.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   - $content['top_center']: Content centered at top
 *   - $content['top_right']: Content at top right
 *   - $content['top_left']: Content at top left
 *   - $content['lower_right']: Wider content at lower right
 *   - $content['lower_left']: Skinnier content at lower left
 */
?>
<div class="container row gutters" id="front-layout">
	<div id='content' class='col span_8'>
		<div id='promo-content' class='row'>
			<?php print $content['promo']; ?>
		</div>
		<div class='row'>
			<div class='col span_6'><?php print $content['bottom_left']; ?></div>
			<div class="col span_6"><?php print $content['bottom_center']; ?></div>
		</div> <!-- /.ui.grid -->
	</div> <!-- /#content -->
	<div id="sidebar" class='col span_4'><?php print $content['sidebar']; ?></div>
</div>
